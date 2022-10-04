import './Nabvar.css'
import React from "react";
import Dropdown from "./Dropdown";
import Form from './Form';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartContext } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
function Navbar() {
    const { getTotalProds, tocarrito } = useCartContext();
    const { isLoged } = useAuth()
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary padre'>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse menu" id="navbarColor01">
                        <div>
                            <Form name='Productos' />
                            <ul className="navbar-nav me-auto justify-content-center">
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Home
                                        <span className="visually-hidden">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {isLoged
                                        ? <Link className="nav-link" to='/perfil' style={{ color: " white", textDecoration: 'none' }}>Perfil</Link>
                                        : <Link className="nav-link" to='/signin' style={{ color: " white", textDecoration: 'none' }}>Logeate</Link>
                                    }
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <Dropdown />
                                <span type="button" className="position-relative">
                                    <Link to='/cart'> <AiOutlineShoppingCart className="carticon " /></Link>
                                    {tocarrito ? <></> : <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {getTotalProds()}
                                    </span>}
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
