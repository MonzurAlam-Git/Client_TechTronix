import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Banner from './Banner';

import BuisnessSummary from './BuisnessSummary';
import ContactUs from './ContactUs';
import Footer from './Footer';
import OrderProcess from './OrderProcess';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className='navbar-center mb-2'>
                <h1 className="text-2xl font-bold text-blue-700"> Hello There! <span className='text-xl font-extrabold text-green-600'>{user?.displayName.toUpperCase()}</span>  </h1>
            </div>
            {/* Banner  */}
            <Banner></Banner>
            {/* Parts  */}
            <Parts></Parts>
            {/* Business Summary */}
            <BuisnessSummary></BuisnessSummary>
            {/* Reviews  */}
            <Reviews ></Reviews>
            {/* Order process */}
            <OrderProcess></OrderProcess>
            {/* Contact Us  */}
            <ContactUs></ContactUs>
            {/* Footer  */}
            <Footer></Footer>

        </div>
    );
};

export default Home;