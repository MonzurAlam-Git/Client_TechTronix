import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'Maruf Ahmed',
            profession: "Game Developer",
            review: "Recently visited this computer part shop and was really impressed with the selection and prices. The staff were knowledgeable and helpful, and were able to answer all of my questions about the various components and systems available. I ended up purchasing a new processor and the whole process was quick and seamless."
        },
        {
            id: 2,
            name: 'Towsif Ahmed',
            profession: "Islamic Scientist",
            review: "recently visited this computer part shop and was very happy with my experience. The staff were knowledgeable and helpful, and the store had a great selection of high-quality components at affordable prices.I ended up purchasing a new monitor and some RAM, and the whole process was quick and seamless"
        },
        {
            id: 3,
            name: 'Papon Ahmed',
            profession: "Procastinate Expert",
            review: "I had a fantastic experience at this computer part shop. The staff were friendly and knowledgeable, and were able to help me find exactly what I needed for my computer upgrade. The store had a wide range of components at great prices, and the overall atmosphere was welcoming and professional"
        },
    ]
    return (
        <div className='mt-5 '>
            <h1 className="text-4xl text-cyan-800 font-bold">Reviews</h1>
            <div className='flex justify-center'>
                {reviews.map(review =>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl mx-3">
                            <div className="card-body mx-3 ">
                                <p className='text-xl font-semibold'>{review.name}</p>
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