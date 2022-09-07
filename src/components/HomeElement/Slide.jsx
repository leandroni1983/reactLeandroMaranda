import { func } from 'prop-types';
import React, { useState, useEffect } from 'react';
import Slide2 from './Slide2';
const Slide = () => {

    const [producto, setproducto] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const getdata = new Promise((res, rej) => {
            res(fetch(`https://fakestoreapi.com/products?limit=5`))
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
        producto.map(producto => <Slide2 key={producto.id} producto={producto} />)


    );
}

export default Slide;
