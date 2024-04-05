import React from 'react';
import servicesData from './../../../../public/Product.json';

const FeaturedProducts = () => {
  return (
    <div className='mx-2 container'>
      <h1 className='text-center text-5xl font-bold my-5'>Featured Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {servicesData.slice(0, 3).map(product => (
          <div className="card w-96 bg-base-100 shadow-xl" key={product.title}>
            <figure>
              <img src={product.picture_url} alt={product.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <div className='flex justify-between'> <p>Price: ${product.offer_price}</p>
              <p>Size:{product.size}</p> </div>
             
              <div className="flex justify-between mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
        
        <a  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Details
        </a>
      </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button className='btn btn-info'>View All Products</button>
      </div>
     
    </div>
  );
};

export default FeaturedProducts;
