import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('https://server-techtronix.vercel.app/reviews', data)
            .then(res => {
                alert("review added")
            })
    }

    return (
        <div className='w-2/5 flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-bordered w-full  mb-2" placeholder='rating' {...register("rating")} />

                <input className="input input-bordered w-full  mb-2" placeholder='review' {...register("review")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='btn btn-primary' value="Submit" type="submit" />

            </form>
        </div>
    );
};

export default AddReview;