import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home'
import Carrito from './views/Carrito'
import './style.css'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito/:id" element={<Carrito />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
