import React from 'react';
import CheckOut from './CheckOut';
import MediosPagos from './MediosPagos';
const Carrito = () => {

    return (
        <>
            <div className='container m-2'>
                <div className="row">
                    <div className="col-6">
                        < MediosPagos />
                    </div>
                    <div className="col-6">
                        <CheckOut />
                    </div>
                </div>

            </div>

        </>

    );
}

export default Carrito;
