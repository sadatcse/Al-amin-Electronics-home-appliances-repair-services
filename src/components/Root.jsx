
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Universal/Navbar';
import Footer from './Universal/Footer';
import Copyright from './Universal/Copyright';



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