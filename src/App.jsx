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
import FormLogin from './components/Login/FormLogin';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import Perfil from './components/Login/Perfil';
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
            <Route path="/login" element={<FormLogin />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path='/cart' element={<Carrito />} />
            <Route path="/products" element={<Item />} />
            <Route path="/category/:category" element={<Item />} />
            <Route path="/producto/:id" element={<GetProducto />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider >
    </>

  );
}

export default App;
