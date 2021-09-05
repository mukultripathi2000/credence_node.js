const express = require('express')
require('./db/mongoose')
const Router = require('./routes/movieRoute')

const app= express()
const port = process.env.PORT||3000

app.use(express.json())
app.use(Router)






app.listen(port,()=>{
    console.log('Server is up on port '+port )
})