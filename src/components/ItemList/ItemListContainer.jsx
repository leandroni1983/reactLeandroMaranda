import React from 'react'
import './ItemList.css'
import { Link } from 'react-router-dom';

export default function PintarUser({ producto }) {

    return (
        <>
            <div className="card cardcita hijo" >
                <img src={producto.image} className="card-img-top" alt="Imagen Producto" />
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text"> Precio $ {producto.price}</p>
                    <p className="card-text">Rating {producto.rating.rate}</p>
                    <div className='botones'>
                        <Link to={`/producto/${producto.id}`}><button className='btn btn-primary btn-sm'>Mas Info</button></Link>
                    </div>
                </div >
            </div >
        </>

    )

} 
