import React from 'react';
import Card from './Card';
import { useCartContext } from '../context/CartContext'

const CardMap = () => {
    const { carro, tocarrito } = useCartContext()

    return (
        <>
            {tocarrito
                ? <h2>Aun no ha seleccionado Productos</h2>
                : carro.map(producto => <Card key={producto.id} producto={producto} />)
            }
        </>

    );
}

export default CardMap;
