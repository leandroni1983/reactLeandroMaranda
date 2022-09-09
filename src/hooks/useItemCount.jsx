import { useState } from "react"


const useItemCount = (stock = 10, initial = 0) => {
    const [count, setCount] = useState(initial)
    const [tocarrito, setTocarrito] = useState(true)
    const sumarItem = (op) => {
        if (count < stock && op) {
            setCount(count + 1)
        } else if (!op && !(count <= initial)) {
            setCount(count - 1)
        }
    }

    const resetItems = () => {
        setCount(1)
    }

    const agregarCarrito = (count, producto) => {
        const carrito = { 'ID': producto.id, 'cantidad': count }
        setTocarrito(false)
        console.log(carrito)
    }


    return {
        count, sumarItem, resetItems, agregarCarrito, tocarrito
    }
}

export default useItemCount;