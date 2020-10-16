import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Websites from '../Websites/Websites';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Websites></Websites>
            <BusinessInfo></BusinessInfo>
            <Carousel></Carousel>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;