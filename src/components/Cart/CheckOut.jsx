import React from 'react'
import { useCartContext } from '../context/CartContext'
import ListCarrito from './ListCarrito'
export default function CheckOut() {
    const { carro, addProduct, getTotalProds, tocarrito, deleteProduct, totalPrice } = useCartContext()
    return (
        <>
            <div className="col-12order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Tu carrito </span>
                    <span className="badge bg-primary rounded-pill">Items: {getTotalProds()}</span>
                </h4>
                <ListCarrito />

                {tocarrito
                    ? <></>
                    : <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <button type="submit" className="btn btn-secondary">Redeem</button>
                        </div>
                    </form>}
            </div>
        </>
    )
}
