import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import '../Styles/AdminPanel.css';
import Dashboard from '../Components/Dashboard';
import ManageMembers from '../Components/ManageMembers';
import ManageTrainers from '../Components/ManageTrainers';
import AdminProgressTracking from '../Components/AdminProgressTracking';

const AdminPanel = () => {
  return (
    <div className="admin-container">
      <div className="sidebar">
        <div className="heading">
          <h2>Admin Panel</h2>
        </div>
        <ul>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="manage-members">Manage Members</Link>
          </li>
          <li>
            <Link to="manage-trainers">Manage Trainers</Link>
          </li>
          <li>
            <Link to="adminprogress-tracking"> Progress Tracking</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={
            <div className="intro-content">
              <h3>Welcome to the Admin Panel</h3>
              <p>Manage your gym operations efficiently through this admin panel. Use the sidebar to navigate between different sections:</p>
              <ul>
                <li><strong>Dashboard:</strong> View key metrics and analytics.</li>
                <li><strong>Manage Members:</strong> Administer member accounts.</li>
                <li><strong>Manage Trainers:</strong> Oversee trainers and their assignments.</li>
                <li><strong>Progress Tracking:</strong> Monitor the progress of gym members.</li>
              </ul>
              <p>Select an option from the sidebar to start managing the gym.</p>
            </div>
          } />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manage-members" element={<ManageMembers />} />
          <Route path="manage-trainers" element={<ManageTrainers />} />
          <Route path="adminprogress-tracking" element={<AdminProgressTracking />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
