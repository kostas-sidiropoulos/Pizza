import '../styles/PizzaDetails.css'
const PizzaDetails = ({pizza}) =>{
    return(
        <div className="pizza-details">
            <img src={pizza.image} className="pizza-image"/>
            <h4>{pizza.title}</h4>
            <p><strong>Price:</strong> {pizza.price}</p>
        </div>
    )
}

export default PizzaDetails