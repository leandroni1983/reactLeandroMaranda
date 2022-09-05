import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const Item = () => {
    //["electronics","jewelery","men's clothing","women's clothing"]
    const [producto, setproducto] = useState([]);
    const { category } = useParams();

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
            .then(json => setproducto(json))
            .catch((err) => console.error(err))

    }, [category])

    return (
        <ItemList producto={producto} />
    );
}

export default Item;
