import React from 'react';
import banner1 from '../../../assets/Banner/Banner1.png'
import banner2 from '../../../assets/Banner/Banner 2.jpg'
import banner3 from '../../../assets/Banner/Banner 3.jpg'
import banner4 from '../../../assets/Banner/Banner 4.jpg'

const Hero = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={banner1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={banner2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={banner3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={banner4} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Hero;