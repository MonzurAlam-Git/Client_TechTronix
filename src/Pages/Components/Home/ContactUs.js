import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bg-blue-600 mx-96 p-10 mb-10'>
            <h1 className="text-3xl text-blue-50 font-bold mb-10">Send Your Words To Us</h1>
            <div className='flex justify-center'>
                <div className='w-full max-w-xs '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder=" Your Name" className="input input-bordered w-full max-w-xs"  {...register("name")} />
                        <input placeholder=" Your Email" className="input input-bordered w-full max-w-xs my-3" {...register("email", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className='btn btn-primary mb-5' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>


    );
};

export default ContactUs;