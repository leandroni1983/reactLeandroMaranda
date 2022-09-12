import React from 'react'
import useItemCount from '../../hooks/useItemCount'
import { BsCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
export default function AgregarCarro({ producto }) {
    const { carro, addProduct, getTotalProds, tocarrito } = useCartContext()
    const { sumarItem, count } = useItemCount()
    return (
        <div >
            <button className='btn btn-dark' onClick={() => sumarItem(true)}>+</button>
            <button className='btn btn-dark'>{count}</button>
            <button className='btn btn-dark' onClick={() => sumarItem(false)}>-</button>
            <button className='btn btn-dark' onClick={() => addProduct(count, producto)}>Agregar  <BsCartFill /></button>
            <Link className='btn btn-dark' to='/cart'>Ver Carrito <BsCartFill /></Link>
        </div>
    )
}
