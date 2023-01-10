import React from 'react';
import Banner from '../Banner';
import BuisnessSummary from './BuisnessSummary';
import ContactUs from './ContactUs';
import Footer from './Footer';
import OrderProcess from './OrderProcess';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
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