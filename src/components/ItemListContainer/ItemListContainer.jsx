import React from 'react';
import './ItemListContainer.css'
const ItemListContainer = ({ greeting }) => {
    return (
        <div className='cardlist'>
            <h1>{greeting}</h1>
            <img src="https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png" alt="imagen reactiva" />
        </div >
    );
}

export default ItemListContainer;
