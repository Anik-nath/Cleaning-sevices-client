import React from 'react';
import HowItWorks from '../HowItWorks/HowItWorks';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;