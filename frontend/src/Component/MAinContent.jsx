




import React from "react";
import { Link } from 'react-router-dom';
import main1 from '../Assets/main1.jpg';
import main2 from '../Assets/main2.jpg'
import herosec from '../Assets/herosec.jpg';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      {/* <section
        id="home"
        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 h-screen flex items-center justify-center text-center"
      >
        <div className="text-white">
          <h2 className="text-5xl font-extrabold mb-4 animate-bounce">Welcome to Health Predict</h2>
          <p className="text-xl mb-6 font-light animate-pulse">
            Accurate Disease Prediction & Personalized Doctor Recommendations
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-200 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
            Learn More
          </button>
        </div>
      </section> */}


{/* <section
  id="home"
  className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
  style={{
    backgroundImage: {herosec}, // You can replace this URL with any image URL
  }}
>
  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-75"></div> */}
  
  {/* <div className="relative z-10 text-white">
    <h2 className="text-5xl font-extrabold mb-4 animate-bounce">Welcome to Health Predict</h2>
    <p className="text-xl mb-6 font-light animate-pulse">
      Accurate Disease Prediction & Personalized Doctor Recommendations
    </p>
    <button className="bg-white text-blue-600 hover:bg-gray-200 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
      Learn More
    </button>
  </div>
</section> */} 
<section
  id="home"
  className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
  style={{
    backgroundImage: `url(${herosec})`, // Properly interpolating the herosec variable here
  }}
>
  {/* You can uncomment the overlay if you want */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-75"></div> */}
  
  <div className="relative z-10 text-black">
    <h2 className="text-5xl font-extrabold mb-4 animate-bounce">Welcome to Health Predict</h2>
    <p className="text-xl mb-6 font-light animate-pulse">
      Accurate Disease Prediction & Personalized Doctor Recommendations
    </p>
    <Link to="/About">
    <button className="bg-white text-blue-600 hover:bg-gray-200 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
      Learn More
    </button>
    </Link>
  </div>
</section>



      {/* Disease Prediction Information Section */}
      <section id="disease-prediction" className="py-16 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Image on the left */}
          <div className="md:w-1/2 mb-8 md:mb-0 transition duration-300 transform hover:scale-105">
            <img
              src={main2}
              alt="Disease Prediction"
              className="rounded-lg shadow-2xl max-w-md mx-auto hover:shadow-lg"
            />
          </div>
          {/* Content on the right */}
         
          <div className="md:w-1/2 md:pl-12 text-center md:text-left pr-20">
  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-8">
    Disease Prediction
  </h2>
  
  <p className="mb-6 text-lg text-gray-700 leading-relaxed">
    Using advanced AI, we analyze your symptoms to predict potential health conditions 
    and provide actionable insights. 
  </p>
  
  <p className="mb-6 text-lg text-gray-700 leading-relaxed">
    <span className="font-semibold">Example:</span> For instance, if you report chest pain, fatigue, 
    and shortness of breath, you may receive predictions regarding potential cardiac conditions.
  </p>
  
  <div className="relative group bg-blue-50 py-6 px-8 rounded-lg shadow-lg max-w-xl mx-auto md:mx-0 mt-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-lg"></div>
    <p className="relative z-10 text-lg text-blue-500 font-semibold group-hover:text-white">
      Your health matters, act now!
    </p>
  </div>
</div>

        </div>
      </section>

      {/* Doctor Recommendation Information Section */}
      <section id="doctor-recommendation" className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Content on the left */}
         
          <div className="md:w-1/2 md:pl-12 text-center md:text-left pl-36">
  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-8">
  Doctor Recommendation
  </h2>

  <p className="mb-6 text-lg text-gray-700 leading-relaxed">
  Using advanced AI, we analyze your symptoms to predict potential health conditions and offer tailored recommendations for further care.
  </p>

  <p className="mb-6 text-lg text-gray-700 leading-relaxed">
    <span className="font-semibold">Example:</span>For instance, if you report chest pain, fatigue, and shortness of breath, our system may recommend consulting a cardiologist for further evaluation of potential cardiac conditions.
  </p>

  {/* Call-to-action Card */}
  <div className="relative group bg-blue-50 py-6 px-8 rounded-lg shadow-lg max-w-xl mx-auto md:mx-0 mt-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
    {/* Background gradient on hover */}
    <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-lg"></div>
    <p className="relative z-10 text-lg text-blue-500 font-semibold group-hover:text-white">
      Your health matters, act now!
    </p>
  </div>
</div>

          
          {/* Image on the right */}
          <div className="md:w-1/2 mt-8 md:mt-0 transition duration-300 transform hover:scale-105">
            <img
              src={main1}
              alt="Doctor Recommendation"
              className="rounded-lg shadow-2xl max-w-md mx-auto hover:shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
