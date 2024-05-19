// LeaveManagementPage.js
import React, { useState } from 'react';
import LeaveRequestForm from '../components/LeaveRequestForm';
import LeaveCalendar from '../components/LeaveCalendar';
import LeaveBalanceCalculator from '../components/LeaveBalanceCalculator';

const LeaveManagementPage = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const initialLeaveBalance = 20; // Example initial leave balance

  const submitLeaveRequest = (newRequest) => {
    setLeaveRequests(prevRequests => [...prevRequests, newRequest]);
  };

  return (
    <div>
      <h1>Leave Management</h1>
      <LeaveRequestForm onSubmit={submitLeaveRequest} />
      <LeaveCalendar leaveRequests={leaveRequests} />
      <LeaveBalanceCalculator initialBalance={initialLeaveBalance} />
    </div>
  );
};

export default LeaveManagementPage;
