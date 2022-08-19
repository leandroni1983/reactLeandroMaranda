import React from 'react'
import Form from './form'
import Dropdown from './Dropdown'
import CardWidget from '../CardWidget/CardWidget'
export default function Nav() {
    return (
        <>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home
                            <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <Dropdown />
                </ul>
                <button><CardWidget /></button>
                <Form name='Productos' />
            </div>
        </>
    )
}
