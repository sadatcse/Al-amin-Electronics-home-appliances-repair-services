import React from 'react';
import Hero from './../Section/Homepage/Hero';
import Ourservice from './../Section/Homepage/Ourservice';

import WhatPeopleSay from '../Section/Homepage/WhatPeopleSay';
import FeaturedProducts from '../Section/Homepage/FeaturedProducts';
import WhyChoice from '../Section/Homepage/WhyChoice';
import Ourspareparts from '../Section/Homepage/Ourspareparts';
import OurLatestProjects from '../Section/Homepage/OurLatestProjects';
import OurClients from '../Section/Homepage/OurClients';

const Home = () => {
    return (
        
        <div>
            <Hero></Hero>
            <div className='mb-10'>
            <Ourservice></Ourservice>
            </div>
            <FeaturedProducts></FeaturedProducts>
            <WhyChoice></WhyChoice>
            <Ourspareparts></Ourspareparts>
            <WhatPeopleSay></WhatPeopleSay>
            <OurLatestProjects></OurLatestProjects>
            <OurClients></OurClients>
        </div>
    );
};

export default Home;