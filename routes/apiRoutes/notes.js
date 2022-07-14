const router = require('express').Router();
const { notes } = require()


router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results)
});

router.post('./notes', (req, res) => {
  store.addNote().then((data) => {
    res.json(data)
  })
  .catch((err) => res.status(404).json(err))
});

module.exports = router;