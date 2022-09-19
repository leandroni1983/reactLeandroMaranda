import React, { useState, useEffect } from 'react';
import Producto from './Producto';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useCartContext } from '../context/CartContext';


import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'


const GetProducto = () => {
    const [producto, setproducto] = useState([])
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const { setEstadoCarro } = useCartContext()

    useEffect(() => {
        const colRef = collection(db, 'productos')
        getDocs(colRef)
            .then((collection) => {
                const prod = collection.docs.find(doc => doc.data().id === parseInt(id))
                setproducto(prod.data())
                setIsLoading(false)
                setEstadoCarro(true)
            })
            .catch((err) => { console.log(err) })

    }, [])



    return (
        isLoading ? <Loader /> : <Producto producto={producto} />
    );
}
export default GetProducto;

