import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase'

const Item = () => {
    const [producto, setproducto] = useState([]);
    const { category } = useParams();
    const [isLoading, setIsLoading] = useState(true)

    //Obtengo el listado de productos total o filtrado por categorias
    async function getData(category) {
        const colData = []
        const data = category ? query(collection(db, "productos"), where('category', '==', category)) : collection(db, 'productos')
        const dataProducts = await getDocs(data)
        dataProducts.docs.map(prod => colData.push({ ...prod.data() }))
        setproducto([...colData])
        setIsLoading(false)
    }
    useEffect(() => {
        try {
            getData(category)
        } catch (error) {
            console.log('error:' + error)
        }

    }, [category])
    return (
        isLoading ? <Loader /> : <ItemList producto={producto} />
    );
}

export default Item;
