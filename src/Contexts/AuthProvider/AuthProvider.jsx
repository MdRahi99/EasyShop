import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, RecaptchaVerifier } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // const onCaptchaVerify = window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    //     'size': 'normal',
    //     'callback': (response) => {

    //     },
    //     'expired-callback': () => {

    //     }
    //   }, auth);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe;
        }
    }, []);

    const authInfo = { name: "Md Forhad Hossain Rahi" };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;