import axios from 'axios';
import React, { useRef } from 'react';
import useAuth from '../../Hooks/useAuth';
import './Contact.css';

const Contact = () => {
    const { handleContact, fnameRef, lnameRef, emailRef, detailsRef } = useAuth();
    // const fnameRef = useRef();
    // const lnameRef = useRef();
    // const emailRef = useRef();
    // const detailsRef = useRef();


    // const handleContact = e => {
    //     e.preventDefault();

    //     const firstName = fnameRef.current.value;
    //     const lastName = lnameRef.current.value;
    //     const email = emailRef.current.value;
    //     const details = detailsRef.current.value;

    //     const contactForm = { firstName, lastName, email, details };

    //     axios.post('http://localhost:5000/contact', contactForm)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('Your information is successfully send. we will contact you as soon as possible');
    //                 e.target.reset();
    //             }
    //         })
    // }



    return (
        <div className="contact-section">
            <div className="container mt-5">
                <form onSubmit={handleContact}>
                    <div className='text-center mb-5'>
                        <h1>Contact Us</h1>
                        <p>You can easily reach us through filling up the form</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="">Your First Name:</label>
                            <input ref={fnameRef} type="text" className="form-control" placeholder="First name" aria-label="Your Name" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="">Your Last Name:</label>
                            <input ref={lnameRef} type="text" className="form-control" placeholder="Last name" aria-label="Your Email" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="">Your Email:</label>
                        <input ref={emailRef} type="email" className="form-control" placeholder="your email" aria-label="Your Email" />
                    </div>
                    <div className="col-md-12 mb-1">
                        <label htmlFor="">Details:</label>
                        <textarea ref={detailsRef} className='form-control w-100 h-50' placeholder='Write Details'></textarea>
                    </div>
                    <input className="btn btn-danger mt-3" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;