import React from 'react';
import { NavLink } from 'react-router-dom';
import { usePizza } from '../context/PizzaContext'

const Navbar = () => {
  const { cartItems } = usePizza();

    // Función para calcular el total a pagar
    const getTotalPrice = () => {
      if (cartItems) {
        const totalPrice = Object.values(cartItems).reduce((total, item) => total + item.totalPrice, 0);
        return totalPrice.toFixed(2);
      }
      return "0.00";
    };

  return (
    <nav>
      <NavLink className="linkHome" to="/">🍕 Pizzería Mamma Mia!</NavLink>
      <NavLink className="linkCarrito" to="/carrito"> 🛒  $ {getTotalPrice()}</NavLink>
    </nav>
  );
};

export default Navbar;