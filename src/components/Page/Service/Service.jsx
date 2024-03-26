import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import jsonData from './../../.././../public/Service.json';
import Banner from '../../Universal/Banner';
import bannerImage from '/Ourservice.png';


const Service = () => {



    const Card = ({ data }) => {
        return (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64 w-full' src={data.image} alt={data.name} /></figure>
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <p>{data.description}</p>
              <div className="card-actions justify-end">
                <a href={data.detailsUrl} className={`btn btn-primary`} style={{ backgroundColor: data.buttonColor }}>Details</a>
              </div>
            </div>
          </div>
        );
      };

      
const CardList = ({ cards }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    );
  };

    return (
        
<div>
<Banner text="Our Services" image={bannerImage} />
<div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">We Provide The Best Services</h1>
        <p className='text-xl text-center mb-5'>Al Amin Electronics is a top AC service company in Bangladesh. We've been offering great services since 2012. Our team is experts in everything about air conditioners. We fix them, keep them clean, install them, and even offer training. If you need anything AC-related, we've got you covered</p>
        <CardList cards={jsonData} />
      </div>
</div>
    );
};

export default Service;




