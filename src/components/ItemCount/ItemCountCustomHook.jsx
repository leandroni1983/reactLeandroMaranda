import { React } from 'react';
import useItemCount from '../../hooks/useItemCount';
import './ItemCount.css'
const ItemCountCustomHook = ({ nombre, stock, initial }) => {
    const { sumarItem, count, resetItems } = useItemCount(stock, initial)

    return (
        <div className='hijo'>
            <div className='card'>
                <img src="./assets/images/reactimg.png" class="card-img-top" alt="React Img" />
                <div className="card-body">
                    <h2>Custom Hook</h2>
                    <h5 className="card-title">Producto: {nombre} </h5>
                    <p className="card-text">En Bodega: {stock}</p>
                    <p className="card-text">En carrito:{count}</p>
                    <button className='btn btn-primary' onClick={() => sumarItem(true)}>+</button>
                    <button className='btn btn-danger' onClick={() => sumarItem(false)} >-</button>
                </div>

                <div>
                    <button className='btn btn-info' onClick={() => resetItems()}>Reset</button>
                    <button className='btn btn-success' onClick={() => alert('pedido confirmado')}>Confirmar</button>
                </div>

            </div>
        </div>
    );
}

export default ItemCountCustomHook;
