import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import BasicTable from './components/Directory.jsx'

import Login from './Component/Login';
import Registration from './Component/Register';
import SymptomsForm from './Component/Form';

import AboutUs from './Component/About';
import Navbar from './Component/Navabr';
import Footer from './Component/Footer';
import Homepage from './Component/MAinContent';
import DoctorProfile from './Component/Doctor';



// import EmployeeForm from './components/EmployeeForm'
function App() {
 
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/About" element={<AboutUs/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Registration/>} />
        <Route path="/Form" element={<SymptomsForm/>} />
        <Route path="/Doctor" element={<DoctorProfile/>} />
        
       
      </Routes>
      <Footer/>
    </Router>
   
  )
}

export default App