import React from 'react'
import useItemCount from '../../hooks/useItemCount'
import { BsCartFill } from 'react-icons/bs'
export default function AgregarCarro({ producto }) {
    const { sumarItem, count, agregarCarrito } = useItemCount()
    return (
        <div className='botones2'>
            <button className='btn btn-primary' onClick={() => sumarItem(true)}>+</button>
            <p>{count}</p>
            <button className='btn btn-primary' onClick={() => sumarItem(false)}>-</button>
            <button className='btn btn-primary' onClick={() => agregarCarrito(count, producto)}>Agregar  <BsCartFill /></button>
        </div>
    )
}
