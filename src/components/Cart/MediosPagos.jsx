import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const MediosPagos = () => {
    const { carro, totalPrice, clearCarro } = useCartContext()
    const [buyer, setbuyer] = useState({})
    const navigate = useNavigate()
    const { user } = useAuth()
    console.log(user)


    const compraAlerta = (text, title, icon) => {
        swal({
            title: `${title}`,
            text: `${text}`,
            icon: `${icon}`,
            button: 'Aceptar',
        })
    }

    const handleInputChange = (e) => {
        setbuyer(({ ...buyer, [e.target.id]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(buyer).length < 4 || carro.length === 0) {
            compraAlerta('Faltan datos, chequee su carrito y datos personales', 'Datos incompletos', 'warning')
        } else {
            addDataToBdd()
            clearCarro()
            navigate('/products')
        }
    }

    const addDataToBdd = async () => {
        let accountMail = ''
        if (user) {
            accountMail = user.mail
        } else {
            accountMail = 'invitado'
        }
        const order = await addDoc(collection(db, "ordenes"), {
            accountMail,
            buyer,
            precioTotal: `$${totalPrice()}`,
            fecha: new Date(),
            items: carro.map(prod => { return { 'cantidad': prod.cantidad, 'id': prod.id, 'title': prod.title, 'precio': prod.precio } })

        });

        compraAlerta(`${buyer.nombre} tu compra fue realizada con exito id: ${order.id}`, 'Compra realizada con exito', 'success')

    }

    return (
        <>
            <div className="col order-md-1">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="nombre">Nombre </label>
                            <input type="text" className="form-control" id="nombre" name='nombre' placeholder='Nombre Apellido' required onChange={handleInputChange} />
                        </div>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Correo</label>
                        <div className="input-group">
                            <input type="email" className="form-control" id="email" placeholder="Correo" required onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono">Telefono</label>
                        <input type="telefono" className="form-control" id="telefono" placeholder="(011-4555-5555)" onChange={handleInputChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required onChange={handleInputChange} />

                    </div>

                    <hr className="mb-4" />
                    <div className='d-flex justify-content-center ' >
                        <button className="btn btn-lg btn-primary " type="submit" style={{ width: '100%' }}>Continue to checkout</button>
                    </div>
                </form>
            </div>

        </>
    );
}

export default MediosPagos;
