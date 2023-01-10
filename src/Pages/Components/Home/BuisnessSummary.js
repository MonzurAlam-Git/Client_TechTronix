import React from 'react';

const BuisnessSummary = () => {
    return (
        <div className='mt-10 p-16 '>
            <h1 className="text-4xl font-bold text-cyan-500">Statistics Helps All to Understand</h1>
            <h1 className="text-xl">So we bring some honest Statistics</h1>
            <div className="stats shadow mt-5 p-5">
                <div className="stat ml-5">
                    <div className="stat-figure text-secondary">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="stat-title font-extrabold">Reviewed By</div>
                    <div className="stat-value text-cyan-700 font-extrabold">1778</div>
                    <div className="stat-desc text-secondary">89% of our Client</div>
                </div>



                <div className="stat ml-5">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title font-extrabold">Annual Revenue</div>
                    <div className="stat-value text-secondary">2.6M+</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat ml-5">
                    <div className="stat-figure text-primary">

                    </div>
                    <div className="stat-title font-extrabold">We Served</div>
                    <div className="stat-value text-primary">1.5K</div>
                    <div className="stat-desc">11% more than last month</div>
                </div>



                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title font-extrabold">5* Rated by</div>
                    <div className="stat-value text-secondary">1338</div>
                    <div className="stat-desc">no Review are less than 3*</div>
                </div>

            </div>

        </div>
    );
};

export default BuisnessSummary;