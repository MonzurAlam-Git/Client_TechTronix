import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [entry, setEntry] = useState();

    const onSubmit = data => {
        // return setQuantity(submittedData.quantity);
        setEntry(data);
    };

    return (
        <div >
            <h1>My Profile</h1>
            <div className='mt-5'>
                <h1 className="text-xl font-bold text-red-500">Name : {user.displayName}</h1>
                <h1 className="text-xl font-bold text-red-500"> Email : {user.email}</h1>
            </div>
            <div className='w-4/5 flex justify-center'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="input input-bordered w-full  mb-2" placeholder='education' {...register("education")} />

                    <input className="input input-bordered w-full  mb-2" placeholder='location' {...register("location")} />
                    <input className="input input-bordered w-full max-w-x mb-2s" placeholder='LinkedIn Profile Link' type="number" {...register("LinkedIn")} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className='btn btn-primary' value="Purchase" type="submit" />


                </form>
            </div>
        </div>
    );
};

export default MyProfile;