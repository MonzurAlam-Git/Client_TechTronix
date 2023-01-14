import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                alert("review added")
            })
    }

    return (
        <div className='w-2/5 flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-bordered w-full mb-2" placeholder='name' {...register("name")} />
                <input className="input input-bordered w-full mb-2" placeholder='profession' {...register("profession")} />
                {/* <input className="input input-bordered w-full mb-2" placeholder='rating' {...register("rating")} /> */}
                <select className="select w-full max-w-xs" {...register("rating")}>
                    <option disabled selected>Rate Your Experience</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <input className="input input-bordered w-full mb-2" placeholder='review' {...register("review")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='btn btn-primary' value="Submit" type="submit" />

            </form>
        </div>
    );
};

export default AddReview;