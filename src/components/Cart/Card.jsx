import React from 'react';
import { useCartContext } from '../context/CartContext'
function Card({ producto }) {
    const { deleteProduct } = useCartContext()

    return (
        <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
                <h6 className="my-0">{producto.title}</h6>
                <small className="text-muted">Selecciono {producto.cantidad}, precio por unidad ${producto.precio}</small>
                <p className="text-muted">Total Item: ${producto.precio * producto.cantidad}</p>
                <img src={producto.image} style={{ height: ' 75px ' }} className='img-fluid' alt="" />
            </div>

            <div className='botones3'>
                <button className='btn btn-danger btn-sm' onClick={() => deleteProduct(producto.id)}>Remover</button>
            </div>
        </li >

    )

}
export default Card;