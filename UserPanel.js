import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

import '../Styles/UserPanel.css';
import MyDashboard from '../Components/MyDashboard';
import ProgressTracker from '../Components/ProgressTracker';
import WorkoutPlans from '../Components/WorkoutPlans';
import DietPlans from '../Components/DietPlans';

const UserPanel = () => {
    return (
        <div className="userpanel-container">
            <div className="sidebar">
                <h2>User Panel</h2>
                <ul>
                    <li>
                        <Link to="mydashboard">My Dashboard</Link>
                    </li>
                    <li>
                        <Link to="progresstracker">Progress Tracker</Link>
                    </li>
                    <li>
                        <Link to="workoutplans">Workout Plans</Link>
                    </li>
                    <li>
                        <Link to="dietplans">Diet Plans</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/" element={
                        <div className="intro-content">
                            <h3>Welcome to the User Panel</h3>
                            <p>Manage your fitness journey efficiently through this user panel. Use the sidebar to navigate between different sections:</p>
                            <ul>
                                <li><strong>My Dashboard:</strong> View your overall progress and metrics.</li>
                                <li><strong>My Progress:</strong> Track your workout progress and achievements.</li>
                                <li><strong>Workout Schedule:</strong> Plan and review your workout routines.</li>
                                <li><strong>Nutrition Plan:</strong> Access your personalized diet recommendations.</li>
                            </ul>
                            <p>Select an option from the sidebar to get started.</p>
                        </div>
                    } />
                    <Route path="mydashboard" element={<MyDashboard />} />
                    <Route path="progresstracker" element={<ProgressTracker />} />
                    <Route path="workoutplans" element={<WorkoutPlans />} />
                    <Route path="dietplans" element={<DietPlans />} />
                </Routes>
            </div>
        </div>
    );
};

export default UserPanel;
