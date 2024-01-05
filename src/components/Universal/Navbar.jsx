import React from 'react';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 border-b border-inherit		">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='/'>Home</a></li>
              <li>
                <a>About</a>
                <ul className="p-2">
                <li><a href='/aboutus'>About Us</a></li>
                  <li><a href='/completeproject'>Complete Project</a></li>
                  <li><a href='/ourteam'>Our Team</a></li>
                  <li><a href='/message'>Message</a></li>
                  <li><a href='/parterners'>Business Partners</a></li>
                  <li><a href='/mission'>Our Mission</a></li>
                </ul>
              </li>
              <li><a href='/service'>Service</a></li>
              <li>
                <a>Product</a>
                <ul className="p-2">
                <li><a href='/acsparesparts'>AC SparesParts</a></li>
                  <li><a href='/airconditioner'>Air Conditioner</a></li>
                </ul>
              </li>
              <li><a href='/testimonials'>Testimonial</a></li>
            <li><a href='/contact'>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img className='h-12 w-48' src={logo} alt='logo'></img></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href='/'>Home</a></li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2">
                  <li><a href='/aboutus'>About Us</a></li>
                  <li><a href='/completeproject'>Complete Project</a></li>
                  <li><a href='/ourteam'>Our Team</a></li>
                  <li><a href='/message'>Message</a></li>
                  <li><a href='/parterners'>Business Partners</a></li>
                  <li><a href='/mission'>Our Mission</a></li>
                </ul>
              </details>
            </li>
            
            <li><a href='/service'>Service</a></li>
           
            <li>
              <details>
                <summary>Product</summary>
                <ul className="p-2">
                  <li><a href='/acsparesparts'>AC SparesParts</a></li>
                  <li><a href='/airconditioner'>Air Conditioner</a></li>
                </ul>
              </details>
            </li>
            <li><a href='/testimonials'>Testimonial</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href='/login' className="btn">Login</a>
        </div>
      </div>
    );
};

export default Navbar;