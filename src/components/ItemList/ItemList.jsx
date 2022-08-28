import React, { useEffect, useState } from 'react';

import ItemListContainer from './ItemListContainer';
const ItemList = ({ producto }) => {
    return (
        producto.map(producto => <ItemListContainer key={producto.id} producto={producto} />)
    );
}

export default ItemList;
