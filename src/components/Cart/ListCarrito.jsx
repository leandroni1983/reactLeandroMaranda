import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import Card from './Card'
export default function ListCarrito() {
    const { carro, tocarrito, totalPrice } = useCartContext()

    return (
        <>
            <ul className="list-group mb-3">
                {tocarrito
                    ? <></>
                    : carro.map(producto => <Card key={producto.id} producto={producto} />)
                }
                {tocarrito
                    ? <>  <Link to="/products"> <button className='btn btn-primary btn-sm' style={{ width: '100%' }}>Carrito Vacio ver Productos</button></Link></>
                    : <li className="list-group-item d-flex justify-content-between">
                        <span>Total (ARS)</span>
                        <strong>${totalPrice()}</strong>
                    </li>}
            </ul>

        </>
    )
}
