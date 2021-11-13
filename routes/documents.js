const path = require('path');
const express = require('express');
const api = require('../api/api');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).render('index', {
        recipes: [
            api[Math.floor(Math.random() * api.length)],
            api[Math.floor(Math.random() * api.length)],
            api[Math.floor(Math.random() * api.length)]
        ]
    });
});

router.get('/recipes', (req, res) => {
    res.status(200).render('recipes', {
        api: api
    });
});

router.get('/recipes/:recipe', (req, res) => {
    for (var id of api) {
        if (id.name.toLowerCase().replace(/\s/g , "-") === req.params.recipe) {
            res.status(200).render('recipe', {
                name: id.name,
                description: id.description,
                image: id.image,
                ingredients: id.ingredients,
                directions: id.directions
            });
        }
    }
    res.status(404).render('error', {status: 404, error: 'Not Found'});
});

router.get('/api', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../api/api.json'));
});

module.exports = router;
