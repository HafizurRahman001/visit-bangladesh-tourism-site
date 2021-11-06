import { useEffect, useRef, useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import axios from 'axios';

initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // declare useState
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    // user automatic google signin
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    };

    // user logout 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            }).finally(() => setIsLoading(false));
    };



    // state changed for user
    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
        return unsubscribe;
    }, []);


    // get data from local
    useEffect(() => {
        fetch('https://gory-cat-15537.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => {
                setError(error)
            })
    }, []);



    // CONTACT INFORMATION
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const detailsRef = useRef();

    //handle contact info
    const handleContact = e => {
        e.preventDefault();

        const firstName = fnameRef.current.value;
        const lastName = lnameRef.current.value;
        const email = emailRef.current.value;
        const details = detailsRef.current.value;

        const contactForm = { firstName, lastName, email, details };

        axios.post('https://gory-cat-15537.herokuapp.com/contact', contactForm)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your information is successfully send. we will contact you as soon as possible');
                    e.target.reset();
                }
            })
    };



    // return all function and state as object
    return {
        user,
        setUser,
        error,
        setError,
        services,
        isLoading,
        logOut,
        handleContact,
        fnameRef, lnameRef, emailRef, detailsRef,
        setIsLoading,
        googleSignIn
    }
};

export default useFirebase;