import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import AllServices from '../All services/AllServices';

const Service = () => {
    const { services, isLoading } = useAuth();

    // loading spinner untill fetch data
    if (isLoading) {
        return <div className="text-center my-5">
            <Spinner style={{ width: '65px', height: '65px' }} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    };
    return (
        <div className='container my-5'>
            <div className="row">
                {
                    services.map(service => <AllServices
                        service={service}
                        key={service?._id}
                    ></AllServices>)
                }
            </div>
        </div>
    );
};

export default Service;