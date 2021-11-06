import React, { useEffect, useState } from 'react';
import './ManageAllBookings.css';

const ManageAllBookings = () => {
    //declaring state
    const [bookingUsers, setBookingUsers] = useState([]);
    const [control, setControl] = useState(true);


    useEffect(() => {
        fetch('https://gory-cat-15537.herokuapp.com/all-booking-users')
            .then(res => res.json())
            .then(data => {
                setBookingUsers(data);
            })
    }, [control]);

    //handle delete
    const handleDelete = id => {
        fetch(`https://gory-cat-15537.herokuapp.com/delete-user/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Are you want to delete user?');
                    setControl(!control);
                };
            })
    };

    const handleApproved = id => {
        fetch(`https://gory-cat-15537.herokuapp.com/approved/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookingUsers)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved Successfully.')
                    setControl(!control)
                };
            })

    };

    return (
        <div style={{ backgroundColor: '#ddd' }}>
            <div style={{ height: '80vh' }} className="container table-section">
                <div className='pt-5 mb-5'>
                    <h2>LIST OF TOTAL BOOKING USERS</h2>
                    <p>Quantity of total booking users: {bookingUsers.length}</p>
                </div>
                <table className="table table-dark table-hover table-area">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Booking Place</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingUsers.map((bookingUser, index) => <tr key={bookingUser?._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{bookingUser?.userName}</td>
                                <td>{bookingUser?.title}</td>
                                <td className={bookingUser?.status === 'Approved' ? 'approved' : 'text-white'}>{bookingUser?.status}</td>
                                <td><button onClick={() => handleDelete(bookingUser?._id)} className="delete-btn">Delete</button>{' '}<button onClick={() => handleApproved(bookingUser?._id)} className="approve-btn">Approve</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllBookings;