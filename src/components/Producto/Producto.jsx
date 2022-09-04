import React from 'react';
import { Link } from 'react-router-dom';
import './Producto.css'
const Producto = ({ producto }) => {

    return (
        <>
            <div className="card">
                <h5 className="card-header">{producto.title}</h5>
                <div className="card-body itemcard">
                    <div>
                        <img src={producto.image} alt={producto.title} />
                    </div>
                    <div>
                        <h4 className="card-title">Descripcion</h4>
                        <p className="card-text">{producto.description}</p>
                        <h5 className="card-title">Precio ${producto.price}</h5>
                        <Link to="/"> <button className='btn btn-success'>Volver</button> </Link>
                    </div>


                </div>
            </div>

        </>
    );
}

export default Producto;
