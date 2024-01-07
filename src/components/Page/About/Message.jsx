import React from 'react';
import { FaUser, FaBriefcase } from 'react-icons/fa';
import mdFaridImage from '../../../assets/Profilepic/IMG_3458  2x2.jpg'; 

const Message = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div>
                <p className='text-center text-3xl text-sky-600 mt-8'>Our Message </p>
                <p className='text-center text-2xl text-gray-500 m-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique explicabo tempore alias est officia odit consequuntur fuga modi sint commodi quam blanditiis maxime eligendi, sit inventore, quasi voluptatem voluptas dignissimos?
        </p>
            </div>
            <div className="bg-white p-6 shadow-md mb-6">
                <div className="flex items-center mb-4">
                    <FaUser className="mr-2" /> 
                    <span className="font-bold text-2xl">Md Farid</span>
                </div>
                <div className="mb-4">
                    <span className="font-bold">Managing Director</span>s
                    <p>Al-Amin Electronics</p>
                </div>
                <p className="text-gray-700">
                    We place our client relationships front and center. At Al Amin Electronics, we strive to build and maintain long-term relationships with every client based on trust, integrity, and professionalism...
                
                </p>
            </div>

    
            <div className="bg-white p-6 shadow-md">
                <div className="flex items-center mb-4">
                    <FaBriefcase className="mr-2" /> 
                    <span className="font-bold">Engr. MD Shahab Uddin Hossain</span>
                </div>
                <div className="mb-4">
                    <span className="font-bold">Manager (Service, Marketing & business Development)</span>
                    <p>Air Conditioning</p>
                </div>
                <p className="text-gray-700">
                    Air Conditioning is a Bangladesh-based company that takes pride in providing high-quality service throughout the whole country...
                  
                </p>
            </div>
            <div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ...">01</div>
  <div class="col-span-2 ...">02</div>
  <div class="row-span-2 col-span-2 ...">03</div>
</div>
         
        </div>
    );
};

export default Message;
