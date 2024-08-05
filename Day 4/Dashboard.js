import React from 'react';
import '../Styles/DashBoard.css';

const Dashboard = () => {
  return (
    <div className='dash'>
      <h1>Dashboard</h1>
      <div className="section">
        <h2>Recent Activities</h2>
        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe - Joined Gym</td>
              <td>2024-07-28</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Jane Smith - Completed Workout</td>
              <td>2024-07-28</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Mike Johnson - Progress Updated</td>
              <td>2024-07-27</td>
              <td>Updated</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section">
        <h2>Member Statistics</h2>
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>Workouts Completed</th>
              <th>Current Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>25</td>
              <td>Weight Loss</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>30</td>
              <td>Strength Training</td>
            </tr>
            <tr>
              <td>Mike Johnson</td>
              <td>15</td>
              <td>Cardio</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
