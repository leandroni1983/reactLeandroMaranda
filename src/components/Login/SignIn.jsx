import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
function SignIn() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const { signin, error, loginGoogle } = useAuth()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signin(user.email, user.password)
    }

    const handleGoogleLogin = async () => {
        await loginGoogle()
    }

    return (
        <div>
            <h3>Ingreso al Sitio</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" name='email' className='form-control' onChange={handleChange} />
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" name='password' className='form-control' onChange={handleChange} />
                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-sm btn-primary " type="submit">Ingresa con Mail</button>
                    <Link to='/signup'><button className="btn btn-sm  btn-primary col-12" type="submit">Crear Cuenta</button></Link>
                </div>
            </form>
            <div className="d-grid gap-2 mt-2">
                <button className="btn btn-sm btn-light" onClick={handleGoogleLogin}><FcGoogle style={{ marginRight: '15px', fontSize: 30 }} /> Login Google</button>
                {error && <p>{error}</p>}
            </div>

        </div >
    )
}

export default SignIn;
