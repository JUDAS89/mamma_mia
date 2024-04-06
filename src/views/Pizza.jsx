import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';

const Pizza = () => {
  const { pizzas } = useContext(PizzaContext);
  const { id } = useParams();
  const pizza = pizzas.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <div>No se encontró la pizza</div>;
  }

  return (
    <div>
      <img src={pizza.img} alt={pizza.name} style={{ width: '200px', height: '200px' }} />
      <h1>{pizza.name}</h1>
      <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default Pizza;