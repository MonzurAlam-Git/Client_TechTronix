import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bg-blue-500 mx-96 p-16 mb-10'>
            <h1 className="text-3xl   font-bold mb-10">Log In</h1>
            <div className='flex justify-center'>
                <div className='w-full max-w-xs '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder=" Your Name" className="input input-bordered w-full max-w-xs"  {...register("name")} />
                        <input placeholder=" Your Email" className="input input-bordered w-full max-w-xs my-3" {...register("email", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className='btn btn-primary mb-5' type="submit" value="Log In" />
                    </form>
                    <p >New With TechTronix? Click <Link className='font-bold' to="/register">Register</Link>  </p>
                    <p className=' font-semibold mt-3'>Forget Password? Click <Link className='font-bold text-red-400' to="/forgetPassword">Reset Password</Link>  </p>
                </div>
            </div>
        </div>
        // <div className="hero min-h-screen  px-24 ">
        //     <div className="hero-content flex-col lg:flex-row-reverse ">
        //         <div className="text-center lg:text-left">
        //             <h1 className="text-5xl font-bold">Login now!</h1>
        //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //         </div>
        //         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //             <div className="card-body">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input type="text" placeholder="email" className="input input-bordered" />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Password</span>
        //                     </label>
        //                     <input type="text" placeholder="password" className="input input-bordered" />
        //                     <label className="label">
        //                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        //                     </label>
        //                 </div>
        //                 <div className="form-control mt-6">
        //                     <button className="btn btn-primary">Login</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Login; 