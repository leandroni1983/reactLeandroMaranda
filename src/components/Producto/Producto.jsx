import React from 'react';
import { Link } from 'react-router-dom';
import './Producto.css'
import AgregarCarro from '../AgregarCarro/AgregarCarro';
const Producto = ({ producto }) => {
    const { title, image, description, price, category, rating } = producto
    return (
        <>
            <div className="card">
                <h5 className="card-header">{title}</h5>
                <div className="card-body itemcard">
                    <div>
                        <img src={image} alt={title} />
                    </div>
                    <div>
                        <h4 className="card-title">Descripcion</h4>
                        <p className="card-text">{description}</p>
                        <h5 className="card-title">Precio ${price}</h5>

                        <div className='botones'>
                            <Link to="/" className='btn btn-success'> Volver al Home</Link>
                            <Link to={`/category/${category}`} className='btn btn-success'>Mas de {category}</Link>
                        </div>
                        <AgregarCarro />
                    </div>




                </div>
            </div>

        </>
    );
}

export default Producto;
