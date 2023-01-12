import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://server-techtronix.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='mt-5 '>
            <h1 className="text-4xl text-cyan-800 font-bold">Reviews</h1>
            <div className='flex justify-center'>
                {reviews.map(review =>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl mx-3">
                            <div className="card-body mx-3 ">
                                <p className='text-xl font-semibold'>{review.name}</p>
                                <p className='text-xl font-semibold'>Rating : {review.rating}</p>
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