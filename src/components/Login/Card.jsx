import React from 'react'

function Card({ element }) {
    const { items } = element;
    return (
        (Object.values(items).map(e =>
            <div key={e.id}>
                <h5>{e.title}</h5>
                <span>
                    <span>{`unidad: $${e.precio} `} </span>
                    <span>{`cantidad:${e.cantidad} precio: $${e.precio * e.cantidad} `}</span>
                </span>
            </div>
        ))


    )
}

export default Card
