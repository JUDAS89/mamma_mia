/*import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="identificacion" to="/">
        🍕Pizzeria Mamma Mia!
      </NavLink>
      <NavLink className="total" to="/carrito">
        🛒 $ <span></span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
*/

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