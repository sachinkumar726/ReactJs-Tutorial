// EmployeeDetailsPage.js
import React, { useState } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeList from '../components/EmployeeList';

const EmployeeDetailsPage = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
  };

  return (
    <div>
      <h1>Employee Details</h1>
      <EmployeeForm onSubmit={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
};

export default EmployeeDetailsPage;
