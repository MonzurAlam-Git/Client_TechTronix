import React from 'react';

const Portfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/rG4khb2/Whats-App-Image-2021-12-23-at-9-27-35-PM.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Manzurul Alam</h1>
                    <h1 className="text-3xl font-bold"> Email : 2manzuralam@gmail.com</h1>
                    <h1 className="text-3xl font-bold"> Completed SSC from CPA High School</h1>
                    <h1 className="text-3xl font-bold"> Completed HSC from South Asian College CHittagong</h1>
                    <h1 className="text-3xl font-bold"> Completed BSC from International Islamic University Chittagong</h1>
                    <p className="py-6 text-2xl font-bold text-red-600">List of Tech : HTML,CSS , REACT , NODE JS , MONGODB</p>
                    <h1 className="text-5xl font-bold"> Live Site :: </h1>
                    <p className="py-6 text-xl font-semibold">Project Name :  Artcell --- Live Site : https://artcellism-ca64c.web.app/home</p>
                    <p className="py-6 text-xl font-semibold">Project Name :  CashCash App --- Live Site :  https://monzuralam-git.github.io/cashcash_app/</p>
                    <p className="py-6 text-xl font-semibold">Project Name :  Portfolio --- Live Site : https://monzuralam-git.github.io/portfolioWeb/</p>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;