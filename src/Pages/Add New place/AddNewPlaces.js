import React from 'react';
import './AddNewPlaces.css';
import { useForm } from 'react-hook-form';

const AddNewPlaces = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://gory-cat-15537.herokuapp.com/add-new-place', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added Place');
                    reset();
                };
            })
    };
    return (
        <div style={{ backgroundColor: '#ddd6', height: '100vh' }} className='py-5'>
            <h1 className='mt-5'>ADD NEW PLACE!</h1>
            <p className='mb-5 text-dark'>Add new place for travel</p>
            <div className="add-new-place-section">
                <div className='form-section'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("title")} placeholder="Add Place Name" />
                        <input {...register("desc", { required: true })} placeholder='Add Place Description' />
                        <input {...register("img", { required: true })} placeholder='add place img link' />

                        <input className='submit-btn' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewPlaces;