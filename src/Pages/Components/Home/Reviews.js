import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='mt-5 px-14'>
            <h1 className="text-4xl text-cyan-800 font-bold">Reviews</h1>
            <div className='grid grid-cols-4 px-16 py-5 justify-center'>
                {reviews.map(review =>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl mx-3">
                            <div className="card-body mx-3 ">
                                <p className='text-xl font-semibold text-teal-600'>Name : {review.name}</p>
                                <p className='text-xl font-semibold text-red-600'>Rating : {review.rating}/5</p>
                                <div className="flex items-center">
                                    <div className='grid align-center'>
                                        <h2 className="font-bold ml-5 text-teal-600 text-center ">{review.profession}</h2>
                                        <p className="ml-5">{review.review}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reviews;