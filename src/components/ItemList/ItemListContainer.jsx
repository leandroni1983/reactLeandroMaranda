import React from 'react'
import { BsCartFill } from 'react-icons/bs'
import './ItemList.css'
import useItemCount from '../../hooks/useItemCount';
export default function PintarUser({ producto }) {
    const { sumarItem, count } = useItemCount()
    return (
        <div className="card hijo" >
            <img src={producto.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text"> Precio $ {producto.price}</p>
                <p className="card-text"> Seleccion: {count}</p>
                <br />
                <div className='botones'>
                    <button className='btn btn-primary' onClick={() => sumarItem(true)}>+</button>
                    <button className='btn btn-primary' onClick={() => sumarItem(false)}>-</button>
                    <button className='btn btn-primary'>Agregar  <BsCartFill /></button>
                </div>

            </div>
        </div>
    )

} 
