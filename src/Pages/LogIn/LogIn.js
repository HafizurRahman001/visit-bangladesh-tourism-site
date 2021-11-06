import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { googleSignIn } = useAuth();

    const location = useLocation();
    const redirect_Ui = location.state?.from || "/";
    const history = useHistory();

    // handle automatic google login
    const handleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_Ui)
            }).catch(error => {
                console.log(error);
            })
    };
    return (
        <div className="container">
            <div className='my-5'>
                <div className="login-section">
                    <h3 className='mb-3'>LogIn With</h3>
                    <div className="login-area">
                        <div onClick={handleLogIn} className="row google-login-section">
                            <div className="col-md-1 col-1"><i className="fab text-danger google-icon fa-google"></i></div>
                            <div style={{ fontSize: '18px' }} className="col-md-11 col-11">Continue with google</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;