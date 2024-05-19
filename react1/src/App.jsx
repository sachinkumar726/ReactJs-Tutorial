// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import LeaveManagementPage from './pages/LeaveManagementPage';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap Routes around Route components */}
        <Route path="/" element={<EmployeeDetailsPage />} /> {/* Use the "element" prop to specify the component */}
        <Route path="/leave-management" element={<LeaveManagementPage />} />
      </Routes>
    </Router>
  );
}

export default App;
