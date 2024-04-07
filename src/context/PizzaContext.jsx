import React, { createContext, useState, useContext, useEffect } from 'react';

const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzaDetails, setPizzaDetails] = useState([]);
  const [selectedPizzas, setSelectedPizzas] = useState([])

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
        setSelectedPizzas([...selectedPizzas, pizza]);
    };

    const removeFromCarrito = (pizzaId) => {
        const updatedPizzas = selectedPizzas.filter((pizza) => pizza.id !== pizzaId);
        setSelectedPizzas(updatedPizzas);
      };

  return (
    <PizzaContext.Provider value={{ pizzaDetails, selectedPizzas, addToCarrito, removeFromCarrito }}>
      {children}
    </PizzaContext.Provider>
  );
};

const usePizza = () => useContext(PizzaContext);

export { PizzaProvider, usePizza, PizzaContext };