import React, { createContext, useContext, useState, useEffect } from 'react';
export const CartContext = createContext()
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
    const [carro, setCarro] = useState([])
    const [tocarrito, setTocarrito] = useState(true)
    const [estadoCarro, setEstadoCarro] = useState(true)

    const addProduct = (count, producto) => {
        const foundProduct = carro.find((item) => item.id === producto.id)
        if (foundProduct) {
            foundProduct.cantidad = foundProduct.cantidad + count;
            setCarro([...carro])
            setEstadoCarro(false)
        } else {
            setCarro([...carro, { 'id': producto.id, 'cantidad': count, "title": producto.title, 'image': producto.image, 'precio': producto.price }])
            setTocarrito(false)
            setEstadoCarro(false)
        }
    }

    const getTotalProds = () => {
        const totalItems = carro.reduce((acc, curr) => acc + curr.cantidad, 0);
        return totalItems

    };


    const deleteProduct = (prodid) => {
        const filterArray = carro.filter((prod) => prod.id !== prodid);
        setCarro(filterArray)

    }

    const totalPrice = () => {
        return Number.parseFloat(carro.reduce((acc, curr) => acc + (curr.precio * curr.cantidad), 0)).toFixed(2);
    }

    const clearCarro = () => {
        setCarro([]);
    }

    useEffect(() => {
        (carro.length === 0 && setTocarrito(true))
    }, [carro]);

    return (
        <CartContext.Provider value={{ estadoCarro, setEstadoCarro, carro, addProduct, getTotalProds, tocarrito, deleteProduct, totalPrice, clearCarro }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;