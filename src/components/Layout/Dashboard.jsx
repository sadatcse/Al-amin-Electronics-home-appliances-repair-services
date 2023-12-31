
import React, { useEffect, useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { FaBox, FaEye, FaTruck, FaMoneyBill, FaUser, FaUsers, FaCreditCard, FaClipboardList, FaReceipt, FaUserAlt, FaStar, FaHome } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import useAdmin from '../Hook/useAdmin';



const Dashboard = () => {

  const companyLogo = "https://i.ibb.co/Y8RvjVn/logo.png";
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  let dashboardOptions = null;
  const { userType, loading: adminLoading } = useAdmin();

  const userRole = userType;

  if (userRole == 2) {
    dashboardOptions = (
      <>
        <li><NavLink to="/dashboard/userhome" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaHome className="mr-2" /> User Home</NavLink></li>
        <li><NavLink to="/dashboard/addparcel" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaBox className="mr-2" /> Add Parcel</NavLink></li>
        <li><NavLink to="/dashboard/viewparcel" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaEye className="mr-2" /> View Parcel</NavLink></li>
        <li><NavLink to="/dashboard/mydeliveryparcel" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaTruck className="mr-2" /> All Delivery Parcel</NavLink></li>
        <li><NavLink to="/dashboard/paymentslip" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaReceipt className="mr-2" /> Payment Slip</NavLink></li>
      </>
    );
  }
  if (userRole == 1) {
    dashboardOptions = (
      <>
        <li><NavLink to="/dashboard/adminhome" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaHome className="mr-2" /> Admin Home</NavLink></li>
        <li><NavLink to="/dashboard/allparcel" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaClipboardList className="mr-2" /> All Parcel</NavLink></li>
        <li><NavLink to="/dashboard/alluser" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaUsers className="mr-2" /> All User</NavLink></li>
        <li><NavLink to="/dashboard/alldelivery" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaUserAlt className="mr-2" /> All Delivery Man</NavLink></li>
        <li><NavLink to="/dashboard/duepayment" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaCreditCard className="mr-2" /> All Due Payment List</NavLink></li>
        <li><NavLink to="/dashboard/successfulpayment" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaStar className="mr-2" /> Successful Payment List</NavLink></li>
      </>
    );
  }
  if (userRole == 3) {
    dashboardOptions = (
      <>
        <li><NavLink to="/dashboard/deliveryhome" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaHome className="mr-2" /> Home</NavLink></li>
        <li><NavLink to="/dashboard/mydelivery" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaTruck className="mr-2" /> My Delivery Parcel List</NavLink></li>
        <li><NavLink to="/dashboard/myreviews" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaStar className="mr-2" /> My Reviews</NavLink></li>
      </>
    );
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Logged Out',
          text: 'User logged out successfully',
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Logout Failed',
          text: 'Logout failed. Please try again later.',
        });
        console.error(error);
      });
  };

  const navigateRole = (userRole) => {
    useEffect(() => {
      if (userRole == 2) {
        navigate('/dashboard/userhome');
      } else if (userRole == 3) {
        navigate('/dashboard/deliveryhome');
      } else if (userRole == 1) {
        navigate('/dashboard/adminhome');
      }
    }, [userRole, navigate]);
  };

  navigateRole(userRole);

  return (
    <div className='flex flex-col h-screen'>
      <header className="bg-gray-800 text-white py-4 flex justify-center items-center">
        <img src={companyLogo} alt="Company Logo" className="h-12 mr-4" />
      </header>

      <div className='flex flex-1'>
        <div className='w-64 min-h-full bg-gradient-to-b from-orange-400 to-orange-600 p-4'>
          <div className="flex items-center justify-between mb-6">

          </div>
          <ul className='menu'>

            {dashboardOptions}
            <li><NavLink to="/dashboard/profile" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaUser className="mr-2" /> My Profile</NavLink></li>
            <li><NavLink to="/" onClick={handleLogOut} className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaUser className="mr-2" /> Logout</NavLink></li>

          </ul>
        </div>
        <div className='flex-1 p-4'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
