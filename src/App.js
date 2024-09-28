import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import BasicTable from './components/Directory.jsx'

import { useState, useEffect } from 'react';
import DoctorAppointment from './Component/data';



// import EmployeeForm from './components/EmployeeForm'
function App() {
 
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorAppointment/>} />
        {/* <Route path="/home" element={<QuickLinks />} />
        <Route path="/performance-management" element={<PerformanceReviewForm />} />
        <Route path="/performance-analytics" element={<PerformanceAnalytics />} />
        <Route path="/payroll" element={<Payroll/>}/>
        <Route path="/roles" element={<Role/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/empreport" element={<EmployeeReport/>}/>
        <Route path="/payroll-dashboard" element={<PayrollDashboard/>}/>
        <Route path="/leave" element={<LeaveForm/>}/>
        <Route path="/leave-history" element={<LeaveHistory/>}/>
        <Route path="/leave-approval" element={<LeaveTable/>}/>
        <Route path="/payroll-report" element={<PayrollReport/>}/>
        <Route path="/directory" element={<EmployeeTable/>}/>
        <Route path="/profile/:name" element={<EmployeeDetails/>}/>
        <Route path="/department-management" element={<DepartmentTable/>}/>
        <Route path="/notification" element={<Notification/>}/> */}
      </Routes>
      
    </Router>
   
  )
}

export default App
