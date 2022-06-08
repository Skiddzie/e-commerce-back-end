const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: Product
  }).then(tag => res.json({tag}));
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findOne(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((tag) => {
    res.status(201).json(tag);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((Tag) => {
      res.status(201).json(Tag);
    })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((tag) => {
    res.status(200).json(tag);
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  }).then((tag) => {
    res.status(200).json(tag);
  })
});

module.exports = router;
