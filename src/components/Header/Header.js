import React from 'react';
import './Header.css';
import logo from '../../images/logo/header-logo.png';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {

    // destructuring necessarry function and states
    const { user, logOut } = useAuth();

    const activeStyle = {
        borderBottom: '2px solid yellow'
    };

    return (
        <nav style={{ backgroundColor: ' #29235B' }} className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid container py-4">
                <div>
                    <Link to='/home'>
                        <img className='logo' src={logo} alt="" />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to='/home'>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to='/about-us'>ABOUT US</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to='/contact-us'>CONTACT US</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to='/dash-board'>DASH BOARD</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex flex-fill">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success btn-success text-white" type="submit">Search</button>
                    </form>
                    <div className="login">
                        {!user?.email ? <Link to='/login'>LogIn</Link> : <Link to='' onClick={logOut} >LogOut</Link>}

                        {
                            user?.email ? <img className="profileImg" src={user?.photoURL ? user?.photoURL : ''} alt="" /> : ''
                        }
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;