require('dotenv').config()

const express = require ('express')
const mongoose = require('mongoose')
const pizzaRoutes = require('./routes/pizza')

//express app
const app = express();

// middleware
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/',pizzaRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(4000,()=>{
            console.log("server listeing on port",process.env.PORT)
        })
    })
    .catch((error) =>{
        console.log(error)
    })
