



// import React, { useState } from 'react';
// import { FaUser, FaLock, FaHeartbeat } from 'react-icons/fa';
// import { auth } from '../src/firebaseConfig'; // Import the auth from your Firebase configuration
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log('Login successful');
//       navigate('/Form'); // Navigate to /Form on successful login
//     } catch (error) {
//       console.error('Error during login:', error.message);
//       alert('Login failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-sky-100 to-sky-300">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
//         <div className="flex items-center justify-center space-x-2">
//           <FaHeartbeat className="text-red-500 text-3xl" />
//           <h2 className="text-3xl font-bold text-center text-gray-800">Health Management</h2>
//         </div>
//         <form onSubmit={handleLogin} className="space-y-6">
//           <div className="relative flex items-center">
//             <FaUser className="absolute left-3 text-gray-400" />
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
//           <div className="flex items-center justify-between">
//             <label className="flex items-center space-x-2">
//               <input type="checkbox" className="w-4 h-4 text-green-600 bg-gray-100 rounded focus:ring-2 focus:ring-green-500" />
//               <span className="text-sm text-gray-600">Remember me</span>
//             </label>
//             <a href="#" className="text-sm text-green-500 hover:underline">Forgot Password?</a>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 ease-in-out"
//           >
//             Login
//           </button>
//         </form>
//         <div className="text-sm text-center text-gray-600">
//           Don't have an account? <a href="/Register" className="text-green-500 hover:underline">Sign up</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/login", { username, password });
            localStorage.setItem("token", res.data.token);
            setMessage("Login Successful!");
        } catch (err) {
            setMessage("Invalid Credentials");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold">Login</h2>
            <form className="p-6 bg-white rounded shadow-lg" onSubmit={handleLogin}>
                <input className="border p-2 w-full" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input className="border p-2 w-full mt-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="bg-blue-500 text-white p-2 w-full mt-2" type="submit">Login</button>
            </form>
            {message && <p className="mt-2">{message}</p>}
        </div>
    );
};

export default Login;
