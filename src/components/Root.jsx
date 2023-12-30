import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AOS from "aos";
import "aos/dist/aos.css";

import './root.css';
import Navbar from './navbar/Navbar';

import Footer from './Footer/Footer';


const Root = () => {
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);

    return (

          <>
          <div className="">
            <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
              <Navbar />
            </div>
  
            <Toaster />
            <Outlet></Outlet>
       
            <Footer />
          </div>
        </>
    );
};

export default Root;