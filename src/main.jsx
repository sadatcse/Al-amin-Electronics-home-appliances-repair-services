import React from "react";
import ReactDOM from "react-dom/client";

// importing slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
} from '@tanstack/react-query';

import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register.jsx';
import Root from './components/Root.jsx';
import Error404 from './components/Page/Error404.jsx';
import Home from './components/Page/Home.jsx';


const queryClient = new QueryClient();


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
       
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
      </QueryClientProvider>
      </React.StrictMode>,
);
