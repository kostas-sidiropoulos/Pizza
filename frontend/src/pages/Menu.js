import { useEffect, useState } from "react";
import React from "react";
import '../styles/Menu.css'
import PizzaDetails from "../components/PizzaDetails";

const Menu = () =>{
    const [pizzas,setPizzas] = useState(null)

    useEffect(()=>{
        const fetchPizzas = async ()=>{
            const respone = await fetch('/api/')
            const json = await respone.json()

            if(respone.ok){
                setPizzas(json)
            }
        }

        fetchPizzas()
    }, [])
    return(
     <div className="menu"> 
        <div className="pizzas">
            {pizzas && pizzas.map((pizza)=>(
                <PizzaDetails key={pizza._id} pizza={pizza} />
            ))}

        </div>
     </div>   
    )
}

export default Menu