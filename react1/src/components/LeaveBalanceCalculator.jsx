import React, { useState } from 'react';

const LeaveBalanceCalculator = ({ initialBalance }) => {
  const [balance, setBalance] = useState(initialBalance);
  const [leaveType, setLeaveType] = useState('');
  const [daysTaken, setDaysTaken] = useState(0);

  const handleLeaveTypeChange = (e) => {
    setLeaveType(e.target.value);
  };

  const handleDaysTakenChange = (e) => {
    setDaysTaken(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (daysTaken > balance) {
      alert("You don't have enough leave balance for this request.");
      return;
    }
    const updatedBalance = balance - daysTaken;
    setBalance(updatedBalance);
    // You can perform further actions here, such as submitting the leave request.
  };

  return (
    <div>
      <h2>Leave Balance Calculator</h2>
      <p>Current Leave Balance: {balance} days</p>
      <form onSubmit={handleSubmit}>
        <label>
          Leave Type:
          <select value={leaveType} onChange={handleLeaveTypeChange} required>
            <option value="">Select Leave Type</option>
            <option value="sick">Sick Leave</option>
            <option value="vacation">Vacation Leave</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          Days Taken:
          <input type="number" value={daysTaken} onChange={handleDaysTakenChange} required />
        </label>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default LeaveBalanceCalculator;
