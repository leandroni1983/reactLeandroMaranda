import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
const Item = () => {
    const [producto, setproducto] = useState([]);
    const { category } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getdata = new Promise((res, rej) => {
            if (category) {
                res(fetch(`https://fakestoreapi.com/products/category/${category}`))
            } else {
                res(fetch('https://fakestoreapi.com/products/'))
            }
        })

        getdata
            .then(res => res.json())
            .then(json => {
                setproducto(json)
                setIsLoading(false)
            })
            .catch((err) => console.error(err))

    }, [category])

    return (
        isLoading ? <Loader /> : <ItemList producto={producto} />
    );
}

export default Item;
