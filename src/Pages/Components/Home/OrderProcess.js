import React from 'react';

const OrderProcess = () => {
    return (
        <div className='p-10 my-10'>
            <h1 className="text-3xl font-bold text-teal-400 mb-5">We Keep The OrderProcess <span className="text-3xl text-red-600 font-extrabold">HASTLE-FREE</span>
            </h1>
            <ul className="steps steps-vertical lg:steps-horizontal mt-5">
                <li className="step font-semibold step-neutral">Register</li>
                <li className="step font-semibold step-accent">Choose plan</li>
                <li className="step font-semibold step-info">Purchase</li>
                <li className="step font-semibold step-success">Receive Product</li>
            </ul>
        </div>

    );
};

export default OrderProcess;
