import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';


const Item = () => {

    const [producto, setproducto] = useState([])

    useEffect(() => {
        const getdata = new Promise((res, rej) => {
            res(fetch('https://fakestoreapi.com/products/'))
        })

        getdata
            .then(res => res.json())
            .then(json => setproducto(json))
            .catch((err) => console.error(err))
    }, [])

    return (
        <ItemList producto={producto} />
    );
}

export default Item;
