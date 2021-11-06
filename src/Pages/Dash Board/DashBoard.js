import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddNewPlaces from '../Add New place/AddNewPlaces';
import ManageAllBookings from '../Manage all bookings/ManageAllBookings';
import MyBookings from '../My Bookings/MyBookings';
import './DashBoard.css';

const DashBoard = () => {
    const [control, setControl] = useState('');
    console.log(control);
    return (
        <div className=''>
            <div>
                <div className="row">
                    <div className="col-md-3 dashboard">
                        <h1 className="fw-bold pt-2 pb-3">DASH BOARD</h1>
                        <ul>
                            <li
                                onClick={() => setControl('manageBookings')}
                            >MANAGE ALL BOOKINGS</li>
                            <li
                                onClick={() => setControl('myBookings')}
                            >MY BOOKINGS</li>
                            <li
                                onClick={() => setControl('addPlace')}
                            >ADD NEW PLACE</li>
                        </ul>
                    </div>
                    <div className="col-md-9 right-dashboard">
                        {
                            control === 'manageBookings' && <ManageAllBookings></ManageAllBookings>
                        }
                        {
                            control === 'myBookings' && <MyBookings></MyBookings>
                        }
                        {
                            control === 'addPlace' && <AddNewPlaces></AddNewPlaces>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;