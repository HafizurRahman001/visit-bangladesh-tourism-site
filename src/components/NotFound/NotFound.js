import React from 'react';
import './NotFound.css';
import notFound from '../../images/404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div>
                <img className="w-100" src={notFound} alt="" />
            </div>
            <div className='go-home-btn'>
                <Link to='/'>
                    <button className="btn btn-danger">Go Home</button>
                </Link>
            </div>
        </>
    );
};

export default NotFound;