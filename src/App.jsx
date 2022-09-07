import React from 'react';
import './App.css';
import Item from './components/ItemList/Item';
import Navbar from './components/Nabvar/Nabvar';
import { Routes, Route } from "react-router-dom";
import GetProducto from './components/Producto/GetProducto';
import Footer from './components/Footer/Footer';
import HomeElement from './components/HomeElement/HomeElement'
function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<HomeElement />} />
      </Routes>
      <div className='padre'>
        <Routes>
          <Route path="/products" element={<Item />} />
          <Route path="/category/:category" element={<Item />} />
          <Route path="/producto/:id" element={<GetProducto />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
