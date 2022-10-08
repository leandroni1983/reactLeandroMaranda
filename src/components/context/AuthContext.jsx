import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
export const authContext = createContext()
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider')
    return context
};
function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [error, setError] = useState()
    const [isLoged, setIsLoged] = useState(false)


    // creo usuario con mail y password en firebase
    const signup = (mail, password) => {
        setError('')
        createUserWithEmailAndPassword(auth, mail, password)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                if (error.code === 'auth/internal-error')
                    setError("corrobore su E-Mail / Password")
                else if (error.code === 'auth/weak-password')
                    setError("contraseña debe contener al menos 6 caracteres")
                else {
                    setError(error.code)
                }
            })
    }

    // login con mail y password
    const signin = (mail, password) => {
        setError('')
        signInWithEmailAndPassword(auth, mail, password)
            .then((userCredential) => {
                const user = userCredential.user
                setUser(user)
                setIsLoged(true)
                navigate('/')
            })
            .catch(() => {
                setError(`Error de ingreso`)
            }
            )
    }

    // deslogeo y navego al home /
    const logOut = () => {
        signOut(auth)
        setIsLoged(false)
        navigate('/')
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, []);

    // login google fireauth creo el objeto google provider y me logeo mediante signInWithPopup
    const loginGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(() => {
                setIsLoged(true)
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.errorMessage
                console.log(errorCode, errorMessage)
            })
    }


    return (
        <authContext.Provider value={{ signup, error, signin, user, logOut, loginGoogle, isLoged }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;
