import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {HelmetProvider } from 'react-helmet-async';
// Import React Router dom 

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

// Import Browser Root

import Root from './components/Root';
import AuthProvider from './providers/AuthProvider';
import PrivateRoot from './components/Root/PrivateRoot';
// import AdminRoute from './components/Root/AdminRoute';

// Registration and Login 

import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';


//About Us Page 

import AboutUs from './components/Page/About/AboutUs';
import CompleteProject from './components/Page/About/CompleteProject';
import MeetOurTeam from './components/Page/About/MeetOurTeam';
import Message from './components/Page/About/Message';
import OurBusinessPartners from './components/Page/About/OurBusinessPartners';
import OurMission from './components/Page/About/OurMission';


//Pages
import Home from './components/Page/Home';
import Contact from './components/Page/Contact/Contact';
import Testimonial from './components/Section/Homepage/Testimonial';
import Service from './components/Section/Homepage/Service';
import Error404 from './components/Page/Error404';

//Product
import ACSparesParts from './components/Page/Products/ACSparesParts';
import AirConditioner from './components/Page/Products/AirConditioner';

//Dashboard 

import MyProfile from './components/Page/Dashboard/Universal/MyProfile';
import Dashboard from './components/Layout/Dashboard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },

      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/aboutus',
        element:<AboutUs></AboutUs>
      },
      {
        path: '/completeproject',
        element:<CompleteProject></CompleteProject>
      },
      {
        path: '/ourteam',
        element: <MeetOurTeam></MeetOurTeam>
      },
      {
        path: '/message',
        element:<Message></Message>
      },
      {
        path: '/parterners',
        element: <OurBusinessPartners></OurBusinessPartners>
      },
      {
        path: '/mission',
        element: <OurMission></OurMission>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/testimonials',
        element: <Testimonial></Testimonial>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/acsparesparts',
        element:<ACSparesParts></ACSparesParts>
      },
      {
        path: '/airconditioner',
        element:<AirConditioner></AirConditioner>
      },
      
       
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoot><Dashboard></Dashboard></PrivateRoot>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'profile',
        element:<PrivateRoot><MyProfile></MyProfile></PrivateRoot>
        
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
      </HelmetProvider>
      </QueryClientProvider>
      </React.StrictMode>,
)

