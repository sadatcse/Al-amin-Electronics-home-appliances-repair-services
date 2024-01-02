
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './root.css';
import Navbar from './Universal/Navbar';
import Footer from './Universal/Footer';
import Copyright from './Universal/copyright';



const Root = () => {

    return (
        <div >
            <Navbar></Navbar>
            <Toaster />
            <Outlet></Outlet>
            <Footer></Footer>
            <Copyright></Copyright>

        </div>
    );
};

export default Root;