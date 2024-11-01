const Pizza = require('../models/PizzaModel')
const mongoose = require('mongoose')

//Get all pizza
const getPizzas = async (req,res) =>{
    const pizzas = await Pizza.find({})

    res.status(200).json(pizzas)
}

//Get a single pizza
const getPizza = async (req,res) =>{
    const {id} = req.params

    const pizza = await Pizza.findById(id)

    if(!pizza){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(pizza)
}

//Post a new Pizza
const createPizza = async (req,res) =>{
    const {title,price}= req.body

    try{
        const pizza = await Pizza.create({title,price})
        res.status(200).json(pizza)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//Delete a pizza
const deletePizza = async(req,res) =>{
    const {id} = req.params

    const pizza = await Pizza.findOneAndDelete({_id:id})

    if(!pizza){
        return res.status(404).json({error: 'No suxh pizza'})
    }

    res.status(200).json(pizza)
}

module.exports = {
    getPizzas,
    getPizza,
    createPizza,
    deletePizza
}