import React from 'react';
import Ourclients from './../Section/Homepage/Ourclients';
import Testimonial from './../Section/Homepage/Testimonial';
import Hero from './../Section/Homepage/Hero';
import Choice from './../Section/Homepage/Choice';
import Service from './../Section/Homepage/Service';

const Home = () => {
    return (
        
        <div>
            <Hero></Hero>
            <Ourclients></Ourclients>
            <Choice></Choice>
            <Service></Service>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;