import React from 'react';
import Hero from './../Section/Homepage/Hero';
import Ourservice from './../Section/Homepage/Ourservice';
import Ourproduct from './../Section/Homepage/Ourproduct';
import ValueableClient from './../Section/Homepage/ValueableClient';
import ClientSay from './../Section/Homepage/ClientSay';
import WhyChoice from './../Section/Homepage/WhyChoice';
import DoortoDoor from './../Section/Homepage/DoortoDoor';

const Home = () => {
    return (
        
        <div>
            <Hero></Hero>
            <div className='mb-10'>
            <Ourservice></Ourservice>
            </div>
         
            <Ourproduct></Ourproduct>
            <ValueableClient></ValueableClient>
            <ClientSay></ClientSay>
            <WhyChoice></WhyChoice>
           

        </div>
    );
};

export default Home;