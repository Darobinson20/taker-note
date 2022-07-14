const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');

 
const data = fs.readFileSync('./db/db.json', {encoding: 'utf8'});





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

// notes();

module.exports = router;