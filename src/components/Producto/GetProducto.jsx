import React, { useState, useEffect } from 'react';
import Producto from './Producto';
import { useParams } from 'react-router-dom';

const GetProducto = () => {

    const [producto, setproducto] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const getdata = new Promise((res, rej) => {
            res(fetch(`https://fakestoreapi.com/products/${id}`))

        })

        getdata
            .then(res => res.json())
            .then(json => setproducto(json))
            .catch((err) => console.error(err))

    }, [])

    return (
        <Producto producto={producto} />
    );
}

export default GetProducto;
