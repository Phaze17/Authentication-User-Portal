import React from 'react';

export default function AdminHub({ user }) {
  return (
    <div className="admin-hub">
      <h2>Welcome, {user.username}!</h2>
      <p>You have admin access to all routes.</p>
      <ul>
        <li>Dashboard</li>
        <li>User Management</li>
        <li>Settings</li>
        <li>Reports</li>
        {/* Add more routes as needed */}
      </ul>
    </div>
  );
}
