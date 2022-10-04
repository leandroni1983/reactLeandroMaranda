import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';


function GetPerfil() {

    const { user, logOut } = useAuth()
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        async function getData(mail) {
            const colData = []
            const data = query(collection(db, "ordenes"), where('accountMail', '==', mail.email))
            const dataProducts = await getDocs(data)
            dataProducts.docs.map(prod => colData.push({ ...prod.data() }))
            dataProducts.docs.map(prod => console.log(prod.data()))

            setData(colData)
        }
        try {
            if (user) {
                getData(user)
            } else {
                logOut()
                navigate('/signin')
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        data.map(e =>
            <>
                <h4>{e.accountMail}</h4>

            </>


        )

    )
}

export default GetPerfil
