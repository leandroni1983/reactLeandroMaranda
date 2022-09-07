import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: '60px'
};

export default function Loader() {
    return (
        <div style={{ height: '480px' }}>
            <ClipLoader color="rgba(52,89,230)" cssOverride={style} />
        </div>
    )
}
