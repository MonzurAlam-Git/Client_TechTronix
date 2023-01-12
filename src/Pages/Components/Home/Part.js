import React from 'react';
import { useNavigate } from 'react-router-dom';
import Purchase from '../../Shared/Purchase';

const Part = ({ part }) => {
    const { _id, name, img, description, minOrderQuantity, availableQuantity, price } = part;
    const navigate = useNavigate('');

    const handleOrder = id => {
        navigate(`/part/${id}`);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img style={{ height: "160px" }} src={img} alt="Shoes" className="rounded-xl w-4/5" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-sky-700">{name}</h2>
                <p className='font-semibold'>{description}</p>
                <p className='font-bold'><span className='text-cyan-600'>Minimum Order Quantity :</span> {minOrderQuantity}</p>
                <p className='font-bold'><span className='text-cyan-600'>Available </span>: {availableQuantity}</p>
                <p className='font-extrabold text-black-600'><span className='text-cyan-600'>Price :</span> {price}</p>

                <div className="card-actions">
                    {/* <button onClick={() => navigate('/purchase')} className="btn btn-primary">Place Order</button> */}
                    <button onClick={() => handleOrder(_id)} className="btn btn-primary">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Part;