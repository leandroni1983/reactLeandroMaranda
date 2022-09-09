import React from "react";
import Dropdown from "./Dropdown";
import Form from "./Form";
import { Link } from "react-router-dom";
import './Nabvar.css'
function Navbar() {

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary padre'>
                {/* //<Link className="dropdown-item" to="/">Todo</Link> */}
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
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
