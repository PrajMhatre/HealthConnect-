import React, { useState } from 'react';
import { FaNotesMedical, FaComment, FaUser } from 'react-icons/fa';

const SymptomsForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission logic, e.g., send data to an API or Firebase
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Symptoms:', symptoms);
    console.log('Comments:', comments);
    alert('Symptoms submitted successfully!');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-green-400">
      <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        <div className="flex items-center justify-center space-x-2">
          <FaNotesMedical className="text-red-500 text-3xl" />
          <h2 className="text-3xl font-bold text-center text-gray-800">Disease Symptoms Form</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative flex items-center">
            <FaUser className="absolute left-3 text-gray-400" />
            <input
              type="text"
              id="name"
              className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Age Field */}
          <div className="relative flex items-center">
            <input
              type="number"
              id="age"
              className="w-full pl-4 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          {/* Symptoms Field */}
          <div className="relative flex items-center">
            <textarea
              id="symptoms"
              rows="4"
              className="w-full pl-4 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Describe your symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              required
            />
          </div>

          {/* Additional Comments Field */}
          <div className="relative flex items-center">
            <FaComment className="absolute left-3 text-gray-400" />
            <textarea
              id="comments"
              rows="3"
              className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Additional comments (optional)"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out"
          >
            Submit Symptoms
          </button>
        </form>
      </div>
    </div>
  );
};

export default SymptomsForm;
