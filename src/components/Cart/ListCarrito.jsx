import React from 'react'
import CardMap from './CardMap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
export default function ListCarrito() {
    const { carro, addProduct, getTotalProds, tocarrito, deleteProduct, totalPrice } = useCartContext()
    return (
        <>
            <ul className="list-group mb-3">
                <CardMap />
                {tocarrito
                    ? <>  <Link to="/" className="btn btn-link"> Volver al Home</Link></>
                    : <li className="list-group-item d-flex justify-content-between">
                        <span>Total (ARS)</span>
                        <strong>${totalPrice()}</strong>
                    </li>}
            </ul>

        </>
    )
}
