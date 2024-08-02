import React from 'react';
import '../Styles/ManageMembers.css';

const ManageMembers = () => {
  return (
    <div>
      <h1>Manage Members</h1>
      <div className="section111">
        <h2>Member List</h2>
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>Join Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>2024-01-15</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>2024-02-20</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;
