import React from 'react'
import useItemCount from '../../hooks/useItemCount'
import { BsCartFill } from 'react-icons/bs'
export default function AgregarCarro({ producto }) {
    const { sumarItem, count, agregarCarrito, tocarrito } = useItemCount()
    return (
        <div className='botones2'>
            {tocarrito ? <><button className='btn' onClick={() => sumarItem(true)}>+</button>
                <button className='btn'>{count}</button>
                <button className='btn' onClick={() => sumarItem(false)}>-</button>
                <button className='btn' onClick={() => agregarCarrito(count, producto)}>Agregar  <BsCartFill /></button> </> : <button className='btn' onClick={() => console.log('Al Carrito')}>Ver Carrito <BsCartFill /></button>}
        </div>
    )
}
