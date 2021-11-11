const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).render('index');
});

router.get('/recipes/:recipe', (req, res) => {
    // TODO: compare $recipe with item.name.toLowerCase().replace(/\s/g , "-")
    res.send(req.params)
});

router.get('/api', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/api.json'));
});

module.exports = router;
