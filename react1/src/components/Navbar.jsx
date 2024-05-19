// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Employee Details</Link></li>
        <li><Link to="/leave-management">Leave Management</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
