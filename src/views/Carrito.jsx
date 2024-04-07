import React from 'react';
import { usePizza } from '../context/PizzaContext'

const Carrito = () => {
    const { pizzaDetails, cartItems, addToCarrito, removeFromCarrito } = usePizza() //obtener las pizzas seleccionadas

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const handleAddPizza = (pizzaId) => {
        const pizza = pizzaDetails.find((pizza) => pizza.id === pizzaId);
        addToCarrito(pizza); // Agrega una pizza al carrito cuando se hace clic en "+"
      };
    
      const handleRemovePizza = (pizzaId) => {
        removeFromCarrito(pizzaId); // Remueve una pizza del carrito cuando se hace clic en "-"
      };

    return (
        <div className='pedido'>
          <h1>Detalles del pedido</h1>
          {Object.keys(cartItems).length > 0 ? (
            <div className="carritoItems">
              {Object.keys(cartItems).map((pizzaId) => {
                const pizza = pizzaDetails.find((pizza) => pizza.id === pizzaId);
                const { quantity, totalPrice } = cartItems[pizzaId];
    
                return (
                  <div key={pizzaId} className="carritoItem">
                    <img src={pizza.img} alt={pizza.name} className='imgCarritoItem'/>
                    <div className="carritoDescription">
                      <h3>{capitalizeFirstLetter(pizza.name)}</h3>
                      <div className='boxCountPizzas'>
                        <p id='totalPrice'> ${totalPrice.toFixed(2)}</p>
                        <button id='btnLess' onClick={() => handleRemovePizza(pizzaId)}> ➖ </button>
                        <span id='totalCount'> {quantity} </span>
                        <button id='btnPluss'onClick={() => handleAddPizza(pizzaId)}> ➕ </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No hay elementos en el carrito.</p>
          )}
          <div className='total'>
            <h3>Total: ${Object.values(cartItems).reduce((total, item) => total + item.totalPrice, 0).toFixed(2)}</h3>
            <button id='btnPagar'>Ir a Pagar</button>
          </div>
        </div>
      );
    };

export default Carrito;