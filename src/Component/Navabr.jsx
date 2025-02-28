import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Component/Assets/logo.jpg';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5 bg-white shadow-md">
            {/* <div className="navbar-logo">
                <h1 className="text-2xl text-gray-800 font-bold">HealthConnect</h1>
            </div> */}
            <div className="navbar-logo flex items-center">
    <img src={logo} alt="HealthConnect Icon" className="h-8 w-8 mr-2" />
    <h1 className="text-2xl text-gray-800 font-bold">HealthConnect</h1>
</div>

            <ul className="flex space-x-5">
                <li><Link to="/" className="text-gray-800 font-bold hover:text-customPurple">Home</Link></li>
                <li><Link to="/about" className="text-gray-800 font-bold hover:text-customPurple">About Us</Link></li>
                <li><a href="#appointment" className="text-gray-800 font-bold hover:text-customPurple">Appointment</a></li>
                <li><a href="/Doctor" className="text-gray-800 font-bold hover:text-customPurple">Doctor profile</a></li>
                
                <li><a href="#contact" className="text-gray-800 font-bold hover:text-customPurple">Contact Us</a></li>
            </ul>
            <div className="flex space-x-3">
            <nav className="flex space-x-4">
    <Link to="/Login">
        <button className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-customPurple to-purple-400 shadow-md hover:bg-customPurple transition">
            Sign In
        </button>
    </Link>
    <Link to="/Register">
        <button className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-customPurple to-purple-400 shadow-md hover:bg-customPurple transition">
            Register
        </button>
    </Link>
</nav>
            </div>
        </nav>
    );
};

export default Navbar;






