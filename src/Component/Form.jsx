
import React, { useState } from 'react';
import { FaNotesMedical, FaComment, FaUser, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const SymptomsForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [comments, setComments] = useState('');

  const symptomOptions = [
    'Fever',
    'Cough',
    'Fatigue',
    'Loss of Taste or Smell',
    'Shortness of Breath',
    'Sore Throat',
    'Headache',
    'Muscle Pain',
  ];

  const handleSymptomChange = (e) => {
    const value = e.target.value;
    setSelectedSymptoms((prev) =>
      prev.includes(value) ? prev.filter((symptom) => symptom !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Birthdate:', birthdate);
    console.log('Address:', address);
    console.log('Symptoms:', selectedSymptoms);
    console.log('Comments:', comments);
    alert('Symptoms submitted successfully!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-6">
      <div className="w-full max-w-2xl p-10 bg-white rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <FaNotesMedical className="text-red-500 text-4xl mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-gray-800">Health Management Form</h2>
          <p className="text-gray-600 mt-2">Please fill in your details and symptoms below</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative flex items-center">
            <FaUser className="absolute left-3 text-gray-400" />
            <input
              type="text"
              id="name"
              className="w-full pl-10 pr-4 py-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="w-full pl-4 pr-4 py-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          {/* Gender Field */}
          <div className="relative flex items-center">
            <select
              id="gender"
              className="w-full pl-4 pr-4 py-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Birthdate Field */}
          <div className="relative flex items-center">
            <FaCalendarAlt className="absolute left-3 text-gray-400" />
            <input
              type="date"
              id="birthdate"
              className="w-full pl-10 pr-4 py-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </div>

          {/* Address Field */}
          <div className="relative flex items-center">
            <FaMapMarkerAlt className="absolute left-3 text-gray-400" />
            <input
              type="text"
              id="address"
              className="w-full pl-10 pr-4 py-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Symptoms Checklist */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Symptoms</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {symptomOptions.map((symptom, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={symptom}
                    checked={selectedSymptoms.includes(symptom)}
                    onChange={handleSymptomChange}
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2 text-gray-800">{symptom}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Comments Field */}
          <div className="relative flex items-center">
            <FaComment className="absolute left-3 text-gray-400" />
            <textarea
              id="comments"
              rows="3"
              className="w-full pl-10 pr-4 py-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Additional comments (optional)"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-lg hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            Submit Symptoms
          </button>
        </form>
      </div>
    </div>
  );
};

export default SymptomsForm;
