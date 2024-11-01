const express = require('express')
const {
    getPizzas,
    getPizza,
    createPizza,
    deletePizza
} = require('../controllers/PizzaControllers')

const router = express.Router();

//Get all pizzas
router.get('/',getPizzas)

//Get a single pizza
router.get('/:id',getPizza)

//Post a new pizza
router.post('/',createPizza)

//Delete a pizza
router.delete('/:id', deletePizza)

module.exports = router