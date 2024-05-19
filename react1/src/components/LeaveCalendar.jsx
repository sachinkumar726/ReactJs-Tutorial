/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const LeaveCalendar = ({ leaveRequests }) => {
  return (
    <div>
      <h2>Leave Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Leave Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map(request => (
            <tr key={request.id}>
              <td>{request.date}</td>
              <td>{request.leaveType}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveCalendar;
