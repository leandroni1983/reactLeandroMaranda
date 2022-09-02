import React from 'react';
import { useParams, Link } from 'react-router-dom';
const Producto = ({ producto }) => {
    const { id } = useParams();

    return (
        <>
            <div>
                <h1>producto id: {id}</h1>
                <h2>{producto.title}</h2>
                <h2>{producto.price}</h2>
                <h3>{producto.category}</h3>
                <h4>{producto.description}</h4>
                <img src={producto.image} alt="" style={{ width: '10rem' }} />
                <Link to="/"> <button className='btn btn-success'>Home</button> </Link>
            </div>
        </>
    );
}

export default Producto;
