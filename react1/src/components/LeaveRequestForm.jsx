import React, { useState } from 'react';

const LeaveRequestForm = ({ onSubmit }) => {
  const [leaveRequest, setLeaveRequest] = useState({
    date: '',
    leaveType: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveRequest(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(leaveRequest);
    // Clear form fields after submission
    setLeaveRequest({
      date: '',
      leaveType: '',
      reason: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={leaveRequest.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Leave Type:
        <select
          name="leaveType"
          value={leaveRequest.leaveType}
          onChange={handleChange}
          required
        >
          <option value="">Select Leave Type</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Vacation Leave">Vacation Leave</option>
          <option value="Maternity/Paternity Leave">Maternity/Paternity Leave</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Reason:
        <textarea
          name="reason"
          value={leaveRequest.reason}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default LeaveRequestForm;
