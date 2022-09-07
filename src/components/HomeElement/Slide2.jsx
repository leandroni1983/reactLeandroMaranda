import React from 'react'
import Slide from './Slide'
export default function Slide2({ producto }) {
    return (
        <div >
            <div className="card item" style={{ width: '14rem' }}>
                <img src={producto.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}
