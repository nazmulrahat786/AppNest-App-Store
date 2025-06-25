import React, { useContext } from 'react';
import logo from "./../../public/favicon.png";
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const navegate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
         toast("Logout successful ");
                          setTimeout(() => {
                  navegate("/")
                }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base lg:text-xl font-semibold ${isActive ? "text-blue-500 underline" : ""}`
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `text-base lg:text-xl font-semibold ${isActive ? "text-blue-500 underline" : ""}`
          }
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-base lg:text-xl font-semibold ${isActive ? "text-blue-500 underline" : ""}`
          }
        >
         About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between gap-11 shadow-sm px-4">
      
      {/* Left Section */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* Logo & Title */}
        <img className="w-10 h-10 mr-2" src={logo} alt="Logo" />
        <span className="text-lg sm:text-2xl font-bold">AppNest</span>
      </div>
<div>
  {/* ✅ ToastContainer is outside the form */}
              <ToastContainer position="top-center" autoClose={2000} />
</div>
      {/* Center - For Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end  space-x-2">
        {user ? (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            
           

            {/* Avatar with Tooltip */}
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user.photoURL}
                alt="User"
              />
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs sm:text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {user.displayName}
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="btn btn-sm sm:btn-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/auth/login">
            <button className="btn btn-sm sm:btn-md">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navber;
