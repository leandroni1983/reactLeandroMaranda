import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'

const Item = () => {
    const [producto, setproducto] = useState([]);
    const { category } = useParams();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const colRef = collection(db, 'productos')
        const colData = []
        if (category) {
            console.log(category)
            getDocs(colRef)
                .then((collection) => {
                    collection.docs.map((prod) => {
                        if (prod.data().category === category) { colData.push({ ...prod.data() }) }
                        setproducto([...colData])
                        setIsLoading(false)
                    })
                })

        } else {
            getDocs(colRef)
                .then((collection) => {
                    collection.docs.map((prod) => {
                        colData.push({ ...prod.data() })
                        setproducto([...colData])
                        setIsLoading(false)
                    })
                })

        }
    }, [category])




    return (
        isLoading ? <Loader /> : <ItemList producto={producto} />
    );
}

export default Item;
