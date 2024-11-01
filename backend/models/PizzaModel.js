const mongoose = require('mongoose')

const pizzaSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:false
    }
    
},{ timestamps: true})

module.exports = mongoose.model('Pizza', pizzaSchema)