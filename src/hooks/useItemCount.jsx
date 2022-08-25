import { useState } from "react"
const useItemCount = (stock, initial) => {
    const [count, setCount] = useState(initial)

    const sumarItem = (op) => {
        if (count < stock && op) {
            setCount(count + initial)
        } else if (!op && !(count < initial)) {
            setCount(count - initial)
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