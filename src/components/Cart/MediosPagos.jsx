import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase'
import swal from 'sweetalert';
const MediosPagos = () => {

    const { carro, totalPrice, clearCarro } = useCartContext()
    const [buyer, setbuyer] = useState({})
    const [orderId, setOrderId] = useState()

    const compraRealizada = (orderid) => {
        swal({
            title: 'Compra Realizada ',
            text: `${buyer.nombre} tu compra id: ${orderid} se realizo con exito`,
            icon: 'success',
            button: 'Aceptar'
        })
    }

    const handleInputChange = (e) => {
        setbuyer(({ ...buyer, [e.target.id]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(buyer).length === 0 || carro.length === 0) {
            console.log('fijate papu algo te falta')
        } else {
            addDataToBdd()
            compraRealizada(orderId)
            clearCarro()
        }
    }

    const addDataToBdd = async () => {
        console.log('enviando datos a base')
        const order = await addDoc(collection(db, "ordenes"), {
            buyer,
            precioTotal: `$${totalPrice()}`,
            fecha: new Date(),
            items: carro.map(prod => { return { 'cantidad': prod.cantidad, 'id': prod.id, 'title': prod.title, 'precio': prod.precio } })
        });
        console.log(order.id)
        setOrderId(order.id)
        console.log(orderId)
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
