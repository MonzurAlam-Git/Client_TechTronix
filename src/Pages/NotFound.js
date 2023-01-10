import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/VYHyN2R/2417237.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='error' />
                <div>
                    <h1 className="text-5xl font-bold">Error Four-O-Four</h1>
                    <p className="py-6 font-semibold"> You've found a Dead-End! <br />
                        Don't worry though, it's not the end of the world. <br /> Just hit the back button or Click on the Get back to Home. If you still can't find what you're looking for, contact us and we'll give you a hand</p>

                    <Link className="btn btn-primary" to="/home">Get Back TO HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;