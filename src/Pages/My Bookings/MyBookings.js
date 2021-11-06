import React, { useEffect, useState } from 'react';
import './MyBooking.css';
import useAuth from '../../Hooks/useAuth';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://gory-cat-15537.herokuapp.com/my-bookings/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [user?.email]);


    const handleCancelBooking = id => {
        fetch(`https://gory-cat-15537.herokuapp.com/cancel-booking/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are you Sure to Cancel Booking?');
                    const filterBooking = bookings.filter(booking => booking?._id !== id);
                    setBookings(filterBooking);
                };
            })
    };

    return (
        <div className="container pb-5">
            <h1 className='pt-5'>YOUR TOTAL BOOKINGS</h1>
            <p className='mb-5'>Booking Quantity: {bookings.length}</p>
            <div>
                <div className="row mb-5">
                    {
                        bookings.map(booking => <div key={booking?._id} className="col-md-4 g-4">
                            <div className="">
                                <div className="card h-100 card-section">
                                    <img style={{ padding: '3px', borderRadius: '7px' }} src={booking?.img} className="card-img-top" alt="..." />
                                    <div className="m-1">
                                        <h3 style={{ color: 'white', padding: '3px 0px', backgroundColor: '#7274a0' }} className="card-title w-100">{booking?.title}</h3>
                                    </div>
                                    <div className="card-body card-body-section">
                                        <div className="row">
                                            <div className="col-md-5 col-5 booking-info-title text-start">
                                                <p>Booking As:</p>
                                                <p>CheckIn:</p>
                                                <p>CheckOut:</p>
                                                <p>Total Adults:</p>
                                                <p>Total Child:</p>
                                                <p>Total Room:</p>
                                                <p>Status:</p>
                                            </div>
                                            <div style={{ paddingLeft: '34px' }} className="col-md-7 col-7 booking-info text-start">
                                                <p>{booking?.userName}</p>
                                                <p>{booking?.checkIn}</p>
                                                <p>{booking?.checkOut}</p>
                                                <p>{booking?.adults}</p>
                                                <p>{booking?.children}</p>
                                                <p>{booking?.rooms}</p>
                                                <p>{booking?.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            style={{ fontSize: '19px' }}
                                            onClick={() => handleCancelBooking(booking?._id)}
                                            className="btn btn-danger w-100">
                                            <i className="fas pe-1 fa-window-close"></i> Cancel Booking
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBookings;