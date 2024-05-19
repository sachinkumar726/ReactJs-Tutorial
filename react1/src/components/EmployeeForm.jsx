/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ onSubmit }) => {
  const [employee, setEmployee] = useState({
    name: '',
    employeeID: '',
    department: '',
    designation: '',
    contactInformation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
    // Clear form fields after submission
    setEmployee({
      name: '',
      employeeID: '',
      department: '',
      designation: '',
      contactInformation: '',
    });
  };

  return (
    <div className="employee-form-container">
      <form onSubmit={handleSubmit}>
        <label className="employee-form-label">
          Name:
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="employee-form-input"
            placeholder="Enter name"
            required
          />
        </label>
        <label className="employee-form-label">
          Employee ID:
          <input
            type="text"
            name="employeeID"
            value={employee.employeeID}
            onChange={handleChange}
            className="employee-form-input"
            placeholder="Enter employee ID"
            required
          />
        </label>
        <label className="employee-form-label">
          Department:
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            className="employee-form-input"
            placeholder="Enter department"
            required
          />
        </label>
        <label className="employee-form-label">
          Designation:
          <input
            type="text"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
            className="employee-form-input"
            placeholder="Enter designation"
            required
          />
        </label>
        <label className="employee-form-label">
          Contact Information:
          <input
            type="text"
            name="contactInformation"
            value={employee.contactInformation}
            onChange={handleChange}
            className="employee-form-input"
            placeholder="Enter contact information"
            required
          />
        </label>
        <button type="submit" className="employee-form-button">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
