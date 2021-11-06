import React, { useEffect, useState } from 'react';
import './ConformBooking.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const ConformBooking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [place, setPlace] = useState({});
    const { id } = useParams();


    useEffect(() => {
        fetch(`https://gory-cat-15537.herokuapp.com/booking/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlace(data);
            })
    }, []);


    //handle submit information
    const onSubmit = data => {
        data.email = user?.email;
        data.title = place?.title;
        data.img = place?.img;
        data.status = 'Pending';

        fetch('https://gory-cat-15537.herokuapp.com/userInfo', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("your Booking is SuccessFull. Thanks for your Choice.");
                    reset();
                }
            })
    };

    return (
        <div className="container my-5">
            <h1 className='my-5'>CONFORM YOUR BOOKING</h1>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div style={{ backgroundColor: '#dddddd3b', color: 'black', border: '1px solid #ddd', borderRadius: '7px' }} className="row p-3">
                        <div className="details-img p-0">
                            <img style={{ width: '100%', borderRadius: '7px' }} className='img-fluid' src={place?.img} alt="" />
                        </div>
                        <div className="">
                            <h1 className='details-heading my-3'>{place?.title}</h1>
                            <p style={{ color: 'gray', paddingTop: '10px', textAlign: 'justify' }}>{place?.desc?.slice(0, 400)}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-12">

                    <div className='user-details'>
                        <h1 className='pt-5'>Fillup Information</h1>
                        <div style={{ paddingBottom: '58px' }} className=" pt-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label style={{ float: 'left', color: 'black' }}>{'Name:'}</label>
                                <input className='w-100'  {...register("userName", { required: true })} placeholder='Name' />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <label style={{ float: 'left', color: 'black' }}>{'Check In:'}</label>
                                <input className='w-100' type='date' {...register("checkIn", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <label style={{ float: 'left', color: 'black' }}>{'Check Out:'}</label>
                                <input className='w-100' type='date' {...register("checkOut", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <label style={{ float: 'left', color: 'black' }}>{'Total Room(s):'}</label>
                                <input className='w-100' {...register("rooms", { required: true })} placeholder='total room(s)' />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <label style={{ float: 'left', color: 'black' }}>{'Total Adults:'}</label>
                                <input type='number' className='w-100' {...register("adults", { required: true })} placeholder='total adults' />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <label style={{ float: 'left', color: 'black' }}>{'Total Children:'}</label>
                                <input type='number' className='w-100' {...register("children", { required: true })} placeholder='total children' />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConformBooking;