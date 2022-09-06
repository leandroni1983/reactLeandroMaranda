import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";



const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: '60px' };


const Item = () => {
    //["electronics","jewelery","men's clothing","women's clothing"]
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
        isLoading ? <ClipLoader color="rgba(52,89,230)" cssOverride={style} /> : <ItemList producto={producto} />
    );
}

export default Item;
