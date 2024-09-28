// import React, { useState } from 'react';
// import { FaUser, FaLock, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

// const Registration = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [verifyPassword, setVerifyPassword] = useState('');
//   const [mobile, setMobile] = useState('');

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (password !== verifyPassword) {
//       alert("Passwords don't match!");
//       return;
//     }
//     console.log('Name:', name, 'Email:', email, 'Password:', password, 'Mobile:', mobile);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-gray-800">Register for Health Management</h2>
//         <form onSubmit={handleRegister} className="space-y-6">
//           {/* Name Field */}
//           <div className="relative flex items-center">
//             <FaUser className="absolute left-3 text-gray-400" />
//             <input
//               type="text"
//               id="name"
//               className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           {/* Email Field */}
//           <div className="relative flex items-center">
//             <FaEnvelope className="absolute left-3 text-gray-400" />
//             <input
//               type="email"
//               id="email"
//               className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Mobile Number Field */}
//           <div className="relative flex items-center">
//             <FaMobileAlt className="absolute left-3 text-gray-400" />
//             <input
//               type="tel"
//               id="mobile"
//               className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
//               placeholder="Mobile Number"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="relative flex items-center">
//             <FaLock className="absolute left-3 text-gray-400" />
//             <input
//               type="password"
//               id="password"
//               className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Verify Password Field */}
//           <div className="relative flex items-center">
//             <FaLock className="absolute left-3 text-gray-400" />
//             <input
//               type="password"
//               id="verifyPassword"
//               className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
//               placeholder="Verify Password"
//               value={verifyPassword}
//               onChange={(e) => setVerifyPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 ease-in-out"
//           >
//             Register
//           </button>
//         </form>
//         <div className="text-sm text-center text-gray-600">
//           Already have an account? <a href="/" className="text-green-500 hover:underline">Login</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;



import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import { auth } from '../firebaseConfig';  // Firebase Auth Import
import { createUserWithEmailAndPassword } from 'firebase/auth';  // Create user import


const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');  // Error state

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');  // Clear any previous error
    if (password !== verifyPassword) {
      setError("Passwords don't match!");
      return;
    }
    
    try {
      // Firebase Authentication to create new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
      alert('Registration successful!');

      // Optional: Save additional user data like name, mobile to your database if needed.
    } catch (error) {
      console.error('Error during registration:', error.message);
      setError(error.message);  // Display error message
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Register for Health Management</h2>
        {error && <p className="text-red-500 text-center">{error}</p>} {/* Error message */}
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name Field */}
          <div className="relative flex items-center">
            <FaUser className="absolute left-3 text-gray-400" />
            <input
              type="text"
              id="name"
              className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-3 text-gray-400" />
            <input
              type="email"
              id="email"
              className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div className="relative flex items-center">
            <FaMobileAlt className="absolute left-3 text-gray-400" />
            <input
              type="tel"
              id="mobile"
              className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative flex items-center">
            <FaLock className="absolute left-3 text-gray-400" />
            <input
              type="password"
              id="password"
              className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Verify Password Field */}
          <div className="relative flex items-center">
            <FaLock className="absolute left-3 text-gray-400" />
            <input
              type="password"
              id="verifyPassword"
              className="w-full pl-10 pr-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Verify Password"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 ease-in-out"
          >
            Register
          </button>
        </form>
        <div className="text-sm text-center text-gray-600">
          Already have an account? <a href="/" className="text-green-500 hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
