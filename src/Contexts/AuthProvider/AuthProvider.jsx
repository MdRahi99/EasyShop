import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, RecaptchaVerifier } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);

    const isLoggedIn = window.localStorage.getItem("loggedIn");

    useEffect(() => {
        const userData = async () => {
            const data = await fetch("http://localhost:5000/userData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: window.localStorage.getItem("token"),
                })
            })
            const result = await data.json();
            setUser(result.data);
        }
        userData();
    }, []);

    const logOut = () => {
        window.localStorage.clear();
        window.location.href="./login";
    }

    const authInfo = { user, logOut, isLoggedIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;