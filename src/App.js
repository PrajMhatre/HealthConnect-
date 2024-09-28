import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import BasicTable from './components/Directory.jsx'

import Login from './Component/Login';
import Registration from './Component/Register';
import SymptomsForm from './Component/Form';



// import EmployeeForm from './components/EmployeeForm'
function App() {
 
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Registration/>} />
        <Route path="/Form" element={<SymptomsForm/>} />
        
       
      </Routes>
      
    </Router>
   
  )
}

export default App