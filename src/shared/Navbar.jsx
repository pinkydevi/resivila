import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../public/images/logo.png'

const Navbar = () => {
   
         const links = <>
           <nav className="flex gap-5 bg-gray-100 px-6 py-3 shadow">
      <Link
        to="/"
        className="rounded-md bg-blue-300 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-blue-400"
      >
        Home
      </Link>
      <Link
        to="/everest"
        className="rounded-md bg-blue-300 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-blue-400"
      >
        About Everest
      </Link>
      <Link
        to="/resilivia"
        className="rounded-md bg-blue-300 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-blue-400"
      >
        About Resilivia
      </Link>
      <Link
        to="/pi"
        className="rounded-md bg-blue-300 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-blue-400"
      >
        Prescribing Information
      </Link>
      <Link
        to="/contact"
        className="rounded-md bg-blue-300 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-blue-400"
      >
        Contact Us
      </Link>
    </nav>



                     

            
            </>
            return (
                <div className="navbar bg-base-100">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                      {links}
                    </ul>
                  </div>
                  <img src={img1} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                    {links}
                  </ul>
                </div>
                <div className="navbar-end gap-5">
                  <a className="btn btn-primary">Appointment</a>
                  
                </div>
              </div>
            );
    
};

export default Navbar;