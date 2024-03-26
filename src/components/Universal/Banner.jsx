import React from 'react';

const Banner = ({ image ,text }) => {
  return (
    <div className="relative w-full">
      <img src={image} alt="Banner" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
        <h1 className="text-white text-5xl font-bold">{text}</h1>
      </div>
    </div>
  );
};

export default Banner;