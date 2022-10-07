import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import Card from './Card';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';


function GetPerfil() {

    const { user, logOut } = useAuth()
    const [items, setitems] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function getData(mail) {
            const colData = []
            const data = query(collection(db, "ordenes"), where('accountMail', '==', mail.email))
            const dataProducts = await getDocs(data)
            dataProducts.docs.map(prod => colData.push({ 'items': prod.data().items, 'total': prod.data().precioTotal, 'time': prod.data().fecha.seconds }))
            setitems(colData)
        }

        try {
            if (user) {
                getData(user)
            } else {
                logOut()
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        items.map(e =>
            <section key={e.items[0].id}>

                <hr />
                <Card element={e} />
                <p>{`Total Compra: ${e.total}`}</p>
                <p>{`Fecha: ${new Date(e.time * 1000).toLocaleDateString()}`}</p>
                <hr />
            </section>)
    )


}

export default GetPerfil
