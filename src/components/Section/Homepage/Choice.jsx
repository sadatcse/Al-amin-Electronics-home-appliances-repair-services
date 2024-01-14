

import React from 'react';
import whychoice from '../../../assets/Section/whychoice.jpg'

const Choice = () => {
  const bulletPoints = [
    "24-hour emergency service.",
    "Fully licensed (Trade license number-TRAD/DNCC/026404/2022).",
    "In-house system design.",
    "Indoor air quality improvements.",
    "Air system balancing.",
    "HVAC - controls qualified.",
    "On-going HVAC training.",
    "Air condition sales & service.",
    "Specialize in VRF system.",
    "Always follow safety procedures.",
    "All kinds of ducting system"
  ];

  return (
    <div className='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
        <div>
          <img
            className='max-w-md rounded-lg shadow-lg'
            src={whychoice}
            alt='Why Choice'
          />
        </div>
        <div>
          <h1 className='text-3xl font-bold underline mb-4'>Why Choose Us</h1>
          <ul className='list-disc pl-5 text-gray-600'>
            {bulletPoints.map((point, index) => (
              <li key={index} className='mb-2'>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Choice;