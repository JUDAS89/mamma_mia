import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink className="linkHome" to="/">🍕 Pizzería Mamma Mia!</NavLink>
      <NavLink className="linkCarrito" to="/carrito">🛒</NavLink>
    </nav>
  );
};

export default Navbar;