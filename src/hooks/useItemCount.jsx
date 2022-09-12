import { useState } from "react"


const useItemCount = (stock = 10, initial = 1) => {

    const [count, setCount] = useState(initial)

    const sumarItem = (op) => {
        if (count < stock && op) {
            setCount(count + 1)
        } else if (!op && !(count <= 1)) {
            setCount(count - 1)
        }
    }

    const resetItems = () => {
        setCount(1)
    }


    return {
        count, sumarItem, resetItems
    }
}

export default useItemCount;