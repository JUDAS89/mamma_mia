import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { usePizza } from '../context/PizzaContext'

const Pizza = () => {
    const { id } = useParams(); // obtener el id de la pizza
    //const { pizzas } = usePizza ()
    const { pizzaDetails } = usePizza(); // Obtener el contexto de las pizzas
  

    // Verificar si pizzaDetails está definido y no está vacío
    if (!pizzaDetails || pizzaDetails.length === 0) {
        return <div>Cargando pizzas...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos
    }
  
    //encontrar el detalle de la pizza por su id
    const pizza = pizzaDetails.find((pizza) => pizza.id === id);

    if (!pizza) {
        return <div>No se encontró la pizza</div>; //mostrar mensaje si la pizza no se encuentra
     }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="pizzaItemVer">
            <img src={pizza.img} alt={pizza.name} className='imgPizzaItemVer'/>
            <div className="descriptionPizza">
                <h2>{capitalizeFirstLetter(pizza.name)}</h2>
                <hr />
                <p>{capitalizeFirstLetter(pizza.desc)}</p>
                <h5>Ingredientes:</h5>
                <ul className="listIngredients">
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>🍕 {capitalizeFirstLetter(ingredient)}</li>
                    ))}
                </ul>
                <div className="bottomCard">
                    <p className="price"><span>Precio: ${pizza.price}</span></p>
                    <button id="btnSum">Añadir 🛒</button>
                </div>
            </div>
      </div>
  );
};

export default Pizza;