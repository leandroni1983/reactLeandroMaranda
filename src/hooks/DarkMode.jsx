import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext(null)
const Darkmode = () => {
    const [background, setBackground] = useState("light")

    const ChangeMode = () => {
        setBackground((curr) => curr === 'light' ? 'dark' : 'light')
    }
    return {
        background, ChangeMode
    }
}


export default Darkmode;