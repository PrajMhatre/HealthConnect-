



import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.jpg"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons for better visuals

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 p-10 border-t-4 border-gray-600 mt-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 pl-52">
                
                {/* Logo Section */}
                <div className="flex flex-col items-start">
                    <img src={logo} alt="Ranja Hospital" className="w-24 mb-2" />
                    <h4 className="text-2xl font-bold text-white mb-3">HealthConnect</h4>
                    <p className="text-gray-400">Your trusted health partner.</p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="list-none p-0">
                        <li className="mb-2">
                            <Link to="/" className="text-gray-400 hover:text-white hover:underline transition">Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/appointment" className="text-gray-400 hover:text-white hover:underline transition">Appointment</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/services" className="text-gray-400 hover:text-white hover:underline transition">Service</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/about" className="text-gray-400 hover:text-white hover:underline transition">About Us</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/contact" className="text-gray-400 hover:text-white hover:underline transition">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                    <ul className="list-none p-0">
                        <li className="flex items-center mb-2">
                            <FaPhone className="mr-2" /> 
                            <span>000-000-000</span>
                        </li>
                        <li className="flex items-center mb-2">
                            <FaEnvelope className="mr-2" /> 
                            <span>info@email.com</span>
                        </li>
                        <li className="flex items-center mb-2">
                            <FaMapMarkerAlt className="mr-2" /> 
                            <span>Kalutara South</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-gray-400 text-sm">
                <p>&copy; 2024 HealthConnect. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

