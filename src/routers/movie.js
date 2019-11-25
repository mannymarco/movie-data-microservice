const express = require('express');
const Movie = require('../models/movie');
const router = new express.Router();

router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.send(movies);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/movies/:id', async (req, res) => {
    const _id = req.params.id;
    try { 
        const movie = await Movie.findById(_id);
        if (!movie) {
            return res.status(404).send();
        }
        return res.send(movie);
    } catch (e) {
        res.status(500).send();
    }
})

module.exports = router;