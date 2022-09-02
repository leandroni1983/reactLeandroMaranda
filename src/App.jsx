import React from 'react';
import './App.css';
import Item from './components/ItemList/Item';
import Navbar from './components/Nabvar/Nabvar';
import { Routes, Route, Link } from "react-router-dom";
import GetProducto from './components/Producto/GetProducto';
function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className='padre' id='light'>
        <Routes>
          <Route path="/" element={<Item />} />
          <Route path="/producto/:id" element={<GetProducto />} />
        </Routes>
      </div>

    </ >
  );
}

export default App;
