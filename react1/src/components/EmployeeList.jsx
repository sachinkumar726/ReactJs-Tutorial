import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.employeeID}>
            <div>Name: {employee.name}</div>
            <div>Employee ID: {employee.employeeID}</div>
            <div>Department: {employee.department}</div>
            <div>Designation: {employee.designation}</div>
            <div>Contact Information: {employee.contactInformation}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
