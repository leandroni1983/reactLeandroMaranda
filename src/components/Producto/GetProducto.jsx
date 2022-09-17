import React, { useState, useEffect } from 'react';
import Producto from './Producto';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useCartContext } from '../context/CartContext';
const GetProducto = () => {
    const [producto, setproducto] = useState([])
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const { setEstado } = useCartContext()

    useEffect(() => {
        const getdata = new Promise((res) => {
            res(fetch(`https://fakestoreapi.com/products/${id}`))
        })
        getdata
            .then(res => res.json())
            .then(json => {
                setproducto(json)
                setIsLoading(false)
                setEstado(true)

            })
            .catch((err) => console.error(err))
    }, [])

    return (
        isLoading ? <Loader /> : <Producto producto={producto} />
    );
}
export default GetProducto;
