import React from 'react';

function ServiceCard({ service }) {
  return (
    <div className="bg-white p-6 rounded shadow-md border border-1 h-full">
      <div className="mb-4">
        <img src={service.image} alt={service.name} className="w-full h-48 rounded-md" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
      <p className="text-gray-700">{service.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book Service
        </button>
        
        <a href={service.detailsUrl} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Details
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;

