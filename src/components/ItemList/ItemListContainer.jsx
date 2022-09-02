import React from 'react'
import { BsCartFill } from 'react-icons/bs'
import './ItemList.css'
import useItemCount from '../../hooks/useItemCount';
import { Link } from 'react-router-dom';

export default function PintarUser({ producto }) {
    const { sumarItem, count } = useItemCount()
    return (
        <>
            <div className="card hijo" >

                <img src={producto.image} className="card-img-top" alt="Imagen Producto" />
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text"> Precio $ {producto.price}   <br />  Seleccion: {count}</p>
                    <br />
                    <div className='botones'>
                        <Link to={`/producto/${producto.id}`}><button className='btn btn-primary btn-sm'>Mas Info</button></Link>
                        <button className='btn btn-primary btn-sm' onClick={() => sumarItem(true)}>+</button>
                        <button className='btn btn-primary btn-sm' onClick={() => sumarItem(false)}>-</button>
                        <button className='btn btn-primary btn-sm'>Agregar  <BsCartFill /></button>

                    </div>

                </div >
            </div >
        </>

    )

} 
