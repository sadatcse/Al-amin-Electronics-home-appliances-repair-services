import React from 'react';
import Ourclients from './../Section/Homepage/Ourclients';
import Testimonial from './../Section/Homepage/Testimonial';
import Hero from './../Section/Homepage/Hero';
import Choice from './../Section/Homepage/Choice';
import Service from './../Section/Homepage/Service';
import WelcomeMessage from '../Section/Homepage/WelcomeMessage';

const Home = () => {
    return (
        
        <div>
            <Hero></Hero>
            <WelcomeMessage></WelcomeMessage>
            <Ourclients></Ourclients>
            <Choice></Choice>
            <Service></Service>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;