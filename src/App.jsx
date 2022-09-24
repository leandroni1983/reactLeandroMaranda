import React from 'react';
import './App.css';
import Item from './components/ItemList/Item';
import Navbar from './components/Nabvar/Nabvar';
import { Routes, Route } from "react-router-dom";
import GetProducto from './components/Producto/GetProducto';
import Footer from './components/Footer/Footer';
import HomeElement from './components/HomeElement/HomeElement'
import Carrito from './components/Cart/Carrito';
import CartProvider from './components/context/CartContext';
function App() {


  return (
    <>
      <CartProvider>
        <header>
          <Navbar />
        </header>
        <div className='padre'>
          <Routes>
            <Route path="/" element={<HomeElement />} />
            <Route path='/cart' element={<Carrito />} />
            <Route path="/products" element={<Item />} />
            <Route path="/category/:category" element={<Item />} />
            <Route path="/producto/:id" element={<GetProducto />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider >
    </>

  );
}

export default App;
