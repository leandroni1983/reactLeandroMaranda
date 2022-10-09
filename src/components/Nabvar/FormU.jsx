import React from 'react';
import './Nabvar.css'
import { HiSearchCircle } from 'react-icons/hi';
const FormU = () => {
    return (
        <>

            <form action="" className='d-flex'>
                <div class="input-group mb-3">
                    <input style={{ width: '400px' }} type="text" class="form-control" placeholder='Buscar Productos, Marcas y mas ...' aria-label="Username" aria-describedby="basic-addon1" />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"> <HiSearchCircle className='lupa' /></span>
                    </div>
                </div>
            </form>


        </>
    );
}
export default FormU;
