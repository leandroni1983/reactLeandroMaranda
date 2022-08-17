import React from 'react'
import Dropdown from './Dropdown'

export default function Nav() {
    return (
        <div>
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
                <form className="d-flex">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>

            </div>
        </div>
    )
}
