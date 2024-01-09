import React from 'react';
import { FaUser, FaBriefcase } from 'react-icons/fa';
import mdFaridImage from '../../../assets/Profilepic/Forid.jpg'; 

const Message = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div>
                <p className='text-center text-3xl text-sky-600 mt-8'>Our Message </p>
                <p className='text-center text-2xl text-gray-500 m-5'>Welcome to our Message Section! Explore the latest updates, insights, and stories directly from our leadership. Engage with us, share your thoughts, and stay connected as we share our vision and journey with you.
        </p>
            </div>


            <div class="grid grid-flow-col gap-4 bg-white p-6 shadow-md mb-6">
                <div class="row-span-3"><img src={mdFaridImage} alt="" /></div>
                 <div class="col-span-2">
                    <div className="flex items-center mb-4">
                  
                    <span className="font-bold text-2xl">Md Farid</span>
                </div>
                <div className="mb-4">
                    <span className="font-bold">Managing Director</span>

                </div>
                <p className="text-gray-700">
                Al-Amin Electronics We place our client relationships front and center. At Al Amin Electronics, we strive to build and maintain long-term relationships with every client based on trust, integrity, and professionalism. As one of the world’s leaders in the heavy machinery industry, Al-Amin Electronics has consistently demonstrated its ability to expand its market share and achieve excellence in aftersales service to realize shareholder value. In the last decade, the company has evolved tremendously by diversifying its brand portfolio and introducing many new products and services through our longstanding passion and commitment to innovate upon the latest technologies. 
                  
                </p></div>
                </div>



                <div class="grid grid-flow-col gap-4 bg-white p-6 shadow-md mb-6">
                <div class="row-span-3"><img src="https://www.ebl.com.bd/assets/aboutus/directors/1__Md__Showkat_Ali_Chowdhury.jpg" alt="" /></div>
                 <div class="col-span-2">
                    <div className="flex items-center mb-4">
                  
                    <span className="font-bold text-2xl">Engr. MD Shahab Uddin Hossain</span>
                </div>
                <div className="mb-4">
                    <span className="font-bold">Manager (Service, Marketing & business Development)</span>

                </div>
                <p className="text-gray-700">
                Air Conditioning is a Bangladesh-based company that takes pride in providing high-quality service throughout the whole country. Our affordable services include customized design, installation, Customized Preventative Maintenance, and service for our clients in numerous industries. These include automobile dealerships, restaurants, manufacturing plants, office environments, and apartment complexes. We offer complete, expert services for maintaining, installing, repairing, and system expansion on your air conditioning and heating systems. We also perform air conditioning and heating conversions to achieve high-energy efficiency. Let Al Amin Electronics provide the comfort and quality that your business deserves. We look forward to the opportunity of providing service to your company shortly.
                  
                </p></div>
                </div>
                

                
         
        </div>
    );
};

export default Message;
