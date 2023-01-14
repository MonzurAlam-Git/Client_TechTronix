import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { id } = useParams();



    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    // const { data, isLoading } = useQuery('partsDetails', () => {
    //     fetch(`http://localhost:5000/services/${id}`)
    //         .then(res => res.json())
    // })

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    // console.log(data);

    const onSubmit = submittedData => {
        // return setQuantity(submittedData.quantity);
        axios.post('http://localhost:5000/orders', submittedData)
            .then(res => console.log(res))
    };

    return (
        <div className="form-control w-2/5 ml-96">
            <div className='grid justify-items-center '>
                <div className=''>
                    <h1 className='font-bold text-4xl text-cyan-500 mb-4'>Purchase</h1>
                    {/* <img src={order.img}></img> */}
                    <h1 className="text-red-500 font-3xl font-bold">Name : {order.name} </h1>
                    <h1 className=" font-2xl font-bold">Available Piece : {order.availableQuantity} </h1>
                    <h1 className=" font-2xl font-bold">Minimum Order Quantity : {order.minOrderQuantity} </h1>
                    <h1 className=" font-2xl font-bold mb-5">Price : {order.price} </h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <img src={order.img} {...register("image")} alt="" />
                    <input value={user.displayName} className="input input-bordered w-full  mb-2" placeholder='Name' {...register("name")} />
                    {/* <input value={order.img} className="input input-bordered w-full  mb-2" placeholder='Name' {...register("image")} /> */}

                    <input value={user.email} className="input input-bordered w-full  mb-2" placeholder='Email' {...register("email", { required: true })} />
                    <input className="input input-bordered w-full max-w-x mb-2s" placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                    <input className="input input-bordered w-full  mb-2 input-lg" placeholder='address' {...register("address", { required: true })} />
                    <input type="number" className="input input-bordered w-full  mb-2" placeholder='Contact Number' {...register("phoneNumber", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className='btn btn-primary' value="Purchase" type="submit" />
                    {/* {
                        submittedData.quantity > order.availableQuantity ?
                            <input className='btn btn-disabled' value="Purchase" type="submit" /> :
                            <input className='btn btn-primary' value="Purchase" type="submit" />
                    } */}

                </form>
            </div>

        </div>
    );
};

export default Purchase; 