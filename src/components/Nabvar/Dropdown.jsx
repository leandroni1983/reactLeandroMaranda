import React from 'react'
import { Link } from 'react-router-dom'
export default function Dropdown() {
    return (
        <>
            <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categorias</div>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/category/men's clothing">Ropa de Hombre</Link>
                    <Link className="dropdown-item" to="/category/women's clothing">Ropa de Mujer</Link>
                    <Link className="dropdown-item" to="/category/jewelery">Joyeria</Link>
                    <Link className="dropdown-item" to="/category/electronics">Electronica</Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="/products">Todo</Link>
                </div>
            </li>
        </>
    )
}
