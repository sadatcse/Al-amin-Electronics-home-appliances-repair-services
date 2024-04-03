import React from 'react';

const Banner = ({ image ,text }) => {
  return (
    <div className="relative w-full mb-5">
      <img src={image} alt="Banner" className="w-full h-96" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h1 className="text-black text-5xl font-bold font-sans
">{text}</h1>
      </div>
    </div>
  );
};

export default Banner;