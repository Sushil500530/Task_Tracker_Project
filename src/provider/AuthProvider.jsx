/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from "react";
import { useState } from "react";
import auth from "./firebase.config";
import { useEffect } from "react";
export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    
    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
     
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscriber()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        googleSignIn,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;