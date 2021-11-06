import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner-section mb-3">
                <div className="banner container">
                    <h1 className='text-white'>WELLCOME TO <span style={{ color: '#ffd400' }}>VISIT BANGLADESH</span></h1>
                    <p>"Travel more and Know your country"</p>
                    <div className="banner-description">
                        <p>We are offering many peaceful and gorgeous places of Bangladesh to you for know your country more and more.
                        </p>
                    </div>
                </div>
            </div>
            <div className="corona-update-section">
                <div className="container">
                    <div className="row corona-update align-items-center">
                        <div className="col-md-6">
                            <h4 className='text-white covid-info-title'>Coronavirus COVID-19 information for patients</h4>
                        </div>
                        <div className="col-md-6 text-end covid-19-btn-section">
                            <Link to={{ pathname: "https://corona.gov.bd/" }} target="_blank">
                                <button className='btn btn-primary'>
                                    Covid-19 Resources
                                    <i className="fas fa-angle-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;