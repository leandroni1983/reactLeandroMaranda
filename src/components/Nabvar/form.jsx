import React from 'react';
import './Nabvar.css'
import { HiSearchCircle } from 'react-icons/hi';
const Form = ({ name }) => {
    return (
        <>
            <form className="d-flex">
                <div className="input-group input-group-sm mb-3">
                    <input type="text" style={{ width: '500px' }} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder='Buscar Productos, Marcas y mas ...' />
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm"> <HiSearchCircle className='lupa' /></span>
                    </div>
                </div>
            </form>
        </>
    );
}
export default Form;
