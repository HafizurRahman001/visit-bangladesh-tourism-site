import React from 'react';

const Achivements = () => {
    return (
        <div style={{ backgroundColor: 'rgb(255 154 243 / 58%)' }} className='mb-5'>
            <div className="container">
                <div className="pt-5">
                    <h5>Something About Visit Bangladesh</h5>
                    <h2 className="fw-bold">CENTER ACHIEVEMENTS</h2>
                </div>
                <div style={{ padding: '50px 0px' }} className="row">
                    <div className="col-md-3 col-6">
                        <div>
                            <i style={{ fontSize: '60px' }} className="fas py-3 fa-plane-departure"></i>
                        </div>
                        <h1 style={{ color: '#ff5200' }} className="fw-bold">94,534</h1>
                        <h5 className='fw-bold'>CUSTOMERS</h5>
                    </div>
                    <div className="col-md-3 col-6">
                        <div>
                            <i style={{ fontSize: '60px' }} className="fas py-3 fa-tree"></i>
                        </div>
                        <h1 style={{ color: '#ff5200' }} className="fw-bold">1021</h1>
                        <h5 className='fw-bold'>DESTINATION</h5>
                    </div>
                    <div className="col-md-3 col-6">
                        <div>
                            <i style={{ fontSize: '60px' }} className="fas py-3 fa-globe"></i>
                        </div>
                        <h1 style={{ color: '#ff5200' }} className="fw-bold">20,096</h1>
                        <h5 className='fw-bold'>TOURS</h5>
                    </div>
                    <div className="col-md-3 col-6">
                        <div>
                            <i style={{ fontSize: '60px' }} className="fas py-3 fa-bus"></i>
                        </div>
                        <h1 style={{ color: '#ff5200' }} className="fw-bold">121</h1>
                        <h5 className='fw-bold'>TOUR TYPES</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivements;