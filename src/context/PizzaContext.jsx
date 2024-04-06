import React, { createContext, useState, useContext, useEffect } from 'react';

const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzaDetails, setPizzaDetails] = useState([]);

  useEffect(() => {
    const getPizzaDetails = async () => {
      try {
        const response = await fetch("/pizzas.json"); // Ruta correcta a tu archivo JSON
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

  return (
    <PizzaContext.Provider value={{ pizzaDetails }}>
      {children}
    </PizzaContext.Provider>
  );
};

const usePizza = () => useContext(PizzaContext);

export { PizzaProvider, usePizza };