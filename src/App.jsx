import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home'
import Pizza from './views/Pizza'
import Carrito from './views/Carrito'
import {PizzaProvider} from './context/PizzaContext'
import './style.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <PizzaProvider>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </PizzaProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
