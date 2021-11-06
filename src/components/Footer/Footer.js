import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-section py-4">
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-3 col-12">
                        <div className="signature">
                            <img src='' alt="" />
                        </div>
                        <h4>Visit Bangladesh</h4>
                        <p>Travel more, Learn More</p>
                        <p>Find out your luxurious one</p>
                    </div>
                    <div className="col-md-3 col-12 useful-links-section">
                        <h4>UseFul Links:</h4>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/services">My Bookings</Link></p>
                        <p><Link to="/about">Manage All Bookings</Link></p>
                        <p><Link to="/contact">Add New Place</Link></p>
                    </div>
                    <div className="col-md-3 col-12">
                        <h4>Get In Touch:</h4>
                        <i className="fab social-icon fa-facebook-square"></i>
                        <i className="fab social-icon fa-linkedin"></i>
                        <i className="fab social-icon fa-twitter-square"></i>
                    </div>
                    <div className="col-md-3 col-12">
                        <h4>Contact Us:</h4>
                        <p>2005 Stokes Isle Apt. 896,<br />
                            Venaville 10010, USA <br />
                            info@yourdomain.com <br />
                            (+68) 120034509
                        </p>
                    </div>
                </div>
            </div> <hr />
            <p className='text-center text-dark'>&copy;- All right reserved by medi care team</p>
        </div>
    );
};

export default Footer;