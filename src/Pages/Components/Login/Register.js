import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';



const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating_update, error_update] = useUpdateProfile(auth);
    const [displayName, setDisplayName] = useState('');
    // const [photoURL, setPhotoURL] = useState('');
    const navigate = useNavigate('');



    const onSubmit = async (data) => {
        const { name, email, password, photo } = data;
        await createUserWithEmailAndPassword(email, password)
        // setDisplayName(name);
        // setPhotoURL(photoURL);
        // console.log(name, email, password);
        await updateProfile({ displayName: name }, { photoURL: photo })
        console.log('data', data);
        navigate('/home');
    };
    return (
        <div className=' mx-96 p-16 mb-10'>
            <h1 className="text-3xl   font-bold mb-10">Register</h1>
            <div className='flex justify-center'>
                <div className='w-full max-w-xs '>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder=" Your Name" className="input input-bordered w-full max-w-xs"  {...register("name")} />
                        {/* email field  */}
                        <input placeholder=" Your Email" className="input input-bordered w-full max-w-xs mt-3" {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: 'Please provide Email correctly '
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]/i,
                                    message: 'Please provide Email correctly '
                                }
                            })} />
                        {/* email error display  */}
                        <label className="label">
                            {errors.email?.type === 'required' && <span className='text-red-500 font-bold ml-8'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-red-500 font-bold ml-8'>{errors.email.message}</span>}
                        </label>
                        {/* Password field  */}
                        <input type="password" placeholder=" Your Password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: {
                                value: true, message: 'Please provide password correctly '
                            },
                            minLength: {
                                value: 6, message: "Must be 6 characters or longer"
                            }
                        })} />
                        {/* password error display  */}
                        <label className="label">
                            {errors.password?.type === 'required' && <span className='text-red-500 font-bold ml-8'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500 font-bold ml-8'>{errors.password.message}</span>}
                        </label>

                        <input type="text" placeholder=" Put Your ImageBB Link" className="input input-bordered w-full max-w-xs mb-5" {...register("photo")} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className='btn btn-primary mb-5' type="submit" value="Register" />
                    </form>
                    <p>Already have an Account? Click <Link className='font-bold text-info' to="/login">Login</Link>  </p>

                </div>
            </div>
        </div>
    );
};

export default Register;