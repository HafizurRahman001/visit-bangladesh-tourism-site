import React from 'react';
import Achivements from '../../Pages/Achivements/Achivements';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import TourRivews from '../Tour Rivews/TourRivews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Achivements></Achivements>
            <TourRivews></TourRivews>
        </div>
    );
};

export default Home;