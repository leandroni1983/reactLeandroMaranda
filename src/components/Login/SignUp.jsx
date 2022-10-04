import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'
function SignUp() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const { signup, error } = useAuth()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signup(user.email, user.password)
    }

    return (
        <div className='mb-3 col-6'>
            <h3>Registro</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" name='email' className='form-control' onChange={handleChange} />

                <label htmlFor="password" className='form-label'>password</label>
                <input type="password" name='password' className='form-control' onChange={handleChange} />
                <div >
                    <button type='submit' className='btn btn-primary m-2 btn-lg'>Register</button>
                </div>
            </form >
            {error && <p>{error}</p>
            }
        </div >
    )
}

export default SignUp
