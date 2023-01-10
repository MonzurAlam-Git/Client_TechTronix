import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=' mx-96 p-16 mb-10'>
            <h1 className="text-3xl   font-bold mb-10">Log In</h1>
            <div className='flex justify-center'>
                <div className='w-full max-w-xs '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder=" Your Name" className="input input-bordered w-full max-w-xs"  {...register("name")} />
                        <input placeholder=" Your Email" className="input input-bordered w-full max-w-xs my-3" {...register("email", { required: true })} />
                        <input placeholder=" Your Password" className="input input-bordered w-full max-w-xs mb-5" {...register("password", { required: true })} />
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