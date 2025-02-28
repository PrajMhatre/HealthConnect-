import React from 'react';
import { Link } from 'react-router-dom';
import about from '../Component/Assets/about.jpeg';
import { HeartIcon, DocumentTextIcon, AcademicCapIcon, ShieldCheckIcon, UsersIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const AboutUs = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-sky-100 to-sky-300 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <h2 className="text-5xl font-extrabold text-black text-center mb-12 animate__animated animate__fadeIn">
          About Us
        </h2>
        <p className="text-xl text-black text-center mb-8">
          Our commitment to pioneering innovations is reshaping the landscape of wellness.
        </p>
        <div className="text-center mb-12">
        <Link to="/Register">
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full transition duration-300 hover:bg-gray-200">
            Get Started
          </button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center pl-52">
          {/* Left Column - Image */}
          <div className="mb-8 md:w-1/3 md:mb-0">
  <img
    src={about} // Replace with your image URL
    alt="About Us"
    className="w-full h-auto rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
  />
</div>

          {/* Right Column - Text Content */}
          <div className="md:w-1/2 md:pl-12 text-black">
            <p className="text-lg mb-4 leading-relaxed">
              Welcome to <span className="font-bold text-purple-600">Health Connect,</span> where we leverage the power of advanced AI technology to revolutionize the way you understand and manage your health. 
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Our mission is to provide accurate disease predictions and personalized doctor recommendations, empowering you to take charge of your health journey. With our innovative platform, you can access vital insights based on your symptoms and connect with top-rated healthcare professionals in your area.
            </p>
            
            <p className="text-lg mb-4 leading-relaxed">
              Join us in transforming healthcare into a more accessible and effective experience for everyone. Your health matters—let's make a difference together!
            </p>
           
          </div>
        </div>

        {/* Disease Description Section */}
        <h3 className="text-3xl font-bold text-black text-center my-12">Disease Descriptions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Disease Cards with Icons */}
          {[
            { disease: "Diabetes", description: "A chronic condition that occurs when the body cannot produce enough insulin, leading to high blood sugar levels.", icon: <DocumentTextIcon className="w-8 h-8 text-purple-600 mb-2" /> },
            { disease: "Hypertension", description: "A long-term medical condition in which the blood pressure in the arteries is persistently elevated.", icon: <HeartIcon className="w-8 h-8 text-purple-600 mb-2" /> },
            { disease: "Asthma", description: "A condition in which your airways narrow and swell and may produce extra mucus, making breathing difficult.", icon: <ShieldCheckIcon className="w-8 h-8 text-purple-600 mb-2" /> },
            { disease: "Heart Disease", description: "A range of conditions that affect your heart, including blood vessel diseases, heart rhythm problems, and heart defects.", icon: <UsersIcon className="w-8 h-8 text-purple-600 mb-2" /> },
            { disease: "Cancer", description: "A group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body.", icon: <AcademicCapIcon className="w-8 h-8 text-purple-600 mb-2" /> },
            { disease: "Arthritis", description: "Inflammation of one or more joints, causing pain and stiffness that can worsen with age.", icon: <DevicePhoneMobileIcon className="w-8 h-8 text-purple-600 mb-2" /> },
          ].map((disease, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105">
              <div className="flex items-center">
                {disease.icon}
                <h4 className="text-xl font-bold text-purple-600 mb-2 ml-2">{disease.disease}</h4>
              </div>
              <p className="text-gray-700">{disease.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Animation for Header */}
      <style>
        {`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
        `}
      </style>
    </section>
  );
};

export default AboutUs;
