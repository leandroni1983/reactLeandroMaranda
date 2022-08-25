import { React, useState } from 'react';
import './ItemCount.css'
const ItemCount = ({ nombre, stock, initial }) => {
    const [count, setCount] = useState(initial)

    const sumarItem = (op) => {
        if (count < stock && op) {
            setCount(count + initial)
        } else if (!op && !(count < initial)) {
            setCount(count - initial)
        }
    }

    return (
        <div className='hijo'>
            <div className='card'>
                <img src="./assets/images/reactimg.png" class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Producto: {nombre} </h5>
                    <p className="card-text">En Bodega: {stock}</p>
                    <p className="card-text">En carrito:{count}</p>
                    <button className='btn btn-primary' onClick={() => sumarItem(true)}>+</button>
                    <button className='btn btn-danger' onClick={() => sumarItem(false)} >-</button>
                </div>
                <div>
                    <button className='btn btn-info' onClick={() => setCount(initial)}>Reset</button>
                    <button className='btn btn-success' onClick={() => alert('pedido confirmado')}>Confirmar</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;
