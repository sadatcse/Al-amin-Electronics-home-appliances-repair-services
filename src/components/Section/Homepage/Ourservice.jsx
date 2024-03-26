import React from 'react';
import ServiceCard from './ServiceCard';
import servicesData from './../../../../public/Service.json';

const Ourservice = () => {
    const data =servicesData.slice(0,4);
    return (
<div>
    <h1 className='text-center text-5xl font-bold my-5'>Our Service </h1>
<div className="flex justify-center items-center mx-1 mt-3">
        <div className="grid grid-cols-4 gap-1">
          {data.map(service => (
            <ServiceCard key={service.serialNumber} service={service} />
          ))}
        </div>
      </div>
</div>
    );
};

export default Ourservice;