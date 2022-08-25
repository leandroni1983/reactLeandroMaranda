import React from 'react';
import './ItemListContainer.css'
const ItemListContainer = ({ greeting, ready }) => {
    return (
        <div className='cardlist'>
            <h1 className={ready ? 'green' : 'red'}>{greeting}</h1>
            <img src="/assets/images/reactimg.png" alt="imagen react" />
        </div >
    );
}

export default ItemListContainer;
