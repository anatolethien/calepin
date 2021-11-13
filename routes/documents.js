const path = require('path');
const express = require('express');
const api = require('../api/api');

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('index', {
        recipes: [
            api[Math.floor(Math.random() * api.length)],
            api[Math.floor(Math.random() * api.length)],
            api[Math.floor(Math.random() * api.length)]
        ]
    });
});

router.get('/recipes', (req, res) => {
    return res.render('recipes', {
        api: api
    });
});

router.get('/recipes/:recipe', (req, res) => {
    for (var id of api) {
        if (id.name.toLowerCase().replace(/\s/g , "-") === req.params.recipe) {
            return res.render('recipe', {
                name: id.name,
                description: id.description,
                image: id.image,
                ingredients: id.ingredients,
                directions: id.directions
            });
        }
    }
    return res.render('error', {status: 404, error: 'Not Found'});
});

router.get('/api', (req, res) => {
    return res.sendFile(path.join(__dirname, '../api/api.json'));
});

module.exports = router;
