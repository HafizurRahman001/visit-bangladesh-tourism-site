import React from 'react';
import './AllService.css';
import { Link } from 'react-router-dom';

const AllServices = (props) => {

    return (
        <div className="col-md-4 col-12 g-4">
            <div className="col">
                <div className="card card-section h-100">
                    <img style={{ padding: '3px', borderRadius: '7px' }} src={props?.service?.img} className="card-img-top service-img" alt="..." />
                    <div className="card-body card-body-section">
                        <h5 className="card-title fw-bold">{props?.service?.title}</h5>
                        <p className="card-text text-start">{props?.service?.desc.slice(0, 200)}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={`/booking/${props?.service?._id}`}>
                            <button className="btn btn-primary w-100">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;