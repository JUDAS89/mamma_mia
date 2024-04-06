import React, { useEffect } from 'react';
import { usePizza } from '../context/PizzaContext'
import { NavLink } from 'react-router-dom';
import '../style.css'

const Home = () => {
    const { pizzaDetails } = usePizza();
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
  
    return (
      <div className='contentHome'>
        <div className="presentationHome">
          <h1>¡Pizzería Mamma Mia!</h1>
          <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
          <hr />
        </div>
  
        <div className="pizzaList">
          {pizzaDetails.map((pizza) => (
            <div key={pizza.id} className="pizzaItem">
                <img src={pizza.img} alt={pizza.name}/>
                <div className='descriptionPizza'>
                    <h2>{capitalizeFirstLetter(pizza.name)}</h2>
                    <hr />
                    <h5>Ingredientes:</h5>
                    <ul className='listIngredients'>
                        {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>🍕 {capitalizeFirstLetter(ingredient)}</li>
                        ))}
                    </ul>
                    <hr />
                    <p className='price'><span>$ {pizza.price}</span></p>
                </div>
                <div className='boxBtn'>
                    <button id='btnVer'>Ver Más 👀</button>
                    <button id='btnSum'> Ver Más 🛒</button>
                </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;