import React from 'react'
import { Link } from 'react-router-dom'
export default function Dropdown() {
    //["electronics","jewelery","men's clothing","women's clothing"]
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/producto/category/electronics">Electronica</Link>
                    <Link className="dropdown-item" to="/producto/category/jewelery">jewelery</Link>
                    <Link className="dropdown-item" to="/producto/category/men's clothing">men's clothing</Link>
                    <Link className="dropdown-item" to="/producto/category/women's clothing">women's clothing</Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="/">Todo</Link>
                </div>
            </li>
        </>
    )
}
