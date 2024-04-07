import React, { createContext, useState, useContext, useEffect } from 'react';

const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzaDetails, setPizzaDetails] = useState([]);
  const [cartItems, setCartItems] = useState({}) // objeto para el carrito

  useEffect(() => {
    const getPizzaDetails = async () => {
      try {
        const response = await fetch("/pizzas.json"); 
        if (!response.ok) {
          throw new Error('Networking response was not ok');
        }
        const data = await response.json();
        setPizzaDetails(data);
      } catch (error) {
        console.error('Error fetching Pizza details:', error);
      }
    };

    getPizzaDetails();
  }, []);

    const addToCarrito = (pizza) => {
        const { id, price } = pizza
        const updatedCartItems = { ...cartItems }
    
        if (updatedCartItems[id]) {
            // Si ya existe esta pizza en el carrito, incrementar la cantidad y el precio acumulado
            updatedCartItems[id].quantity++;
            updatedCartItems[id].totalPrice += price;
        } else {
            // Si es una pizza nueva en el carrito, añadir al objeto cartItems
            updatedCartItems[id] = { quantity: 1, totalPrice: price };
        }

      setCartItems(updatedCartItems)
    }

    const removeFromCarrito = (pizzaId) => {
        const updatedCartItems = { ...cartItems };

        if (updatedCartItems[pizzaId]) {
            // Reducir la cantidad y el precio acumulado si la cantidad es mayor que 0
            if (updatedCartItems[pizzaId].quantity > 0) {
              updatedCartItems[pizzaId].quantity--;
              updatedCartItems[pizzaId].totalPrice -= pizzaDetails.find(pizza => pizza.id === pizzaId).price;
            }
            
            // Eliminar la entrada si la cantidad llega a 0
            if (updatedCartItems[pizzaId].quantity === 0) {
              delete updatedCartItems[pizzaId];
            }
      
            setCartItems(updatedCartItems);
          }
      };

  return (
    <PizzaContext.Provider value={{ pizzaDetails, cartItems, addToCarrito, removeFromCarrito }}>
      {children}
    </PizzaContext.Provider>
  );
  }

const usePizza = () => useContext(PizzaContext);

export { PizzaProvider, usePizza, PizzaContext };
  