import React from 'react';
import './Nabvar.css'
import { GrCart } from 'react-icons/gr';
const Form = ({ name }) => {
    return (
        <>
            <div className='carticon'><GrCart /></div>
            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder={name} />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </>

    );

}

export default Form;
