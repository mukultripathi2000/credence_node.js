const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({

    name: {
        type: String,
        required:true,
    },
    img: {
        type: String,
        required:true,
    },
    summary: {
        type: String,
        required:true,
    }
})



const Movie = mongoose.model('Movie',movieSchema)

module.exports=Movie 