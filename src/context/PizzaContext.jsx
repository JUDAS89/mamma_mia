import React, { createContext, useState, useEffect } from 'react';

export const PizzaContext = createContext();

const PizzaContextProvider = (props) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('/pizzas.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

  return <PizzaContext.Provider value={{ pizzas }}>{props.children}</PizzaContext.Provider>;
};

export default PizzaContextProvider;