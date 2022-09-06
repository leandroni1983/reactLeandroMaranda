import React, { useState, useEffect } from 'react';
import Producto from './Producto';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";


const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: '60px' };


const GetProducto = () => {
    const [producto, setproducto] = useState([])
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getdata = new Promise((res, rej) => {
            res(fetch(`https://fakestoreapi.com/products/${id}`))
        })
        getdata
            .then(res => res.json())
            .then(json => {
                setproducto(json)
                setIsLoading(false)
            })
            .catch((err) => console.error(err))
    }, [])

    return (
        isLoading ? <ClipLoader color="rgba(52,89,230)" cssOverride={style} /> : <Producto producto={producto} />
    );
}
export default GetProducto;
