import React from 'react'
import useItemCount from '../../hooks/useItemCount'
import { BsCartFill } from 'react-icons/bs'
export default function AgregarCarro() {
    const { sumarItem, count } = useItemCount()
    return (
        <div className='botones2'>
            <button className='btn btn-primary' onClick={() => sumarItem(true)}>+</button>
            <p>{count}</p>
            <button className='btn btn-primary' onClick={() => sumarItem(false)}>-</button>
            <button className='btn btn-primary'>Agregar  <BsCartFill /></button>
        </div>
    )
}
