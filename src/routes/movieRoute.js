const express = require('express')
const Movie=require('../models/movie')
const router = new express.Router()


//POST / movies         to create a new movie entry in the database

router.post('/movies', async (req, res) => {
    const movie = new Movie(req.body)
    try
    {
        await movie.save()
        res.status(201).send({movie})
    }
    catch (e)
    {
        res.status(400).send(e)
    }
    

})

//GET / movies                          to get all movies from the collection
//GET / movies?limit=10&skip=0          to get movies in paginated way

router.get('/movies',  async (req, res) => {
    
    
    
    
    try
    {
        const skip = parseInt(req.query.skip)||0
        const limit = parseInt(req.query.limit)||0
        const movies = await Movie.find({},null,{skip,limit})
        res.send(movies)
    }
    catch (e)
    {
        res.status(500).send(e)
    }
    })
   


// GET / moives/:id         to get a single movie entry by id

router.get('/movies/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const movie = await Movie.findOne({ _id })

        if (!movie) {
            return res.status(404).send()
        }

        res.send(movie)
    } catch (e) {
        res.status(500).send(e)
    }
})


//PATCH /movies/:id         to update a single movie entry by id

router.patch('/movies/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    try
    {
        const movie = await Movie.findOne({ _id: req.params.id })
        if (!movie)
        {
            return res.status(404).send('Movie not found')
        }
        updates.forEach((update) => movie[update] = req.body[update])
        await movie.save()
        res.send(movie)
    }
    catch (e)
    {
        res.status(400).send(e)
    }
})


//DELETE /movies/:id            to delete a movie entry by id

router.delete('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findOneAndDelete({ _id: req.params.id })

        if (!movie) {
            res.status(404).send()
        }

        res.send(movie)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router