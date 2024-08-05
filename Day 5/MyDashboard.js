import React from 'react';
import '../Styles/MyDashboard.css'; // Import the CSS file

const MyDashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Welcome Back, [User]!</h1>
            <div className="overview">
                <h2>Fitness Overview</h2>
                <div className="overview-content">
                    <div className="card">
                        <h3>Total Workouts</h3>
                        <p>25</p>
                    </div>
                    <div className="card">
                        <h3>Total Calories Burned</h3>
                        <p>1200 kcal</p>
                    </div>
                    <div className="card">
                        <h3>Upcoming Classes</h3>
                        <p>Yoga, Spin, Pilates</p>
                    </div>
                    <div className="card">
                        <h3>Current Goal</h3>
                        <p>Run 5km in 25 minutes</p>
                    </div>
                </div>
            </div>
            <div className="recent-activities">
                <h2>Recent Activities</h2>
                <ul>
                    <li>
                        <p><strong>Cardio:</strong> 30 minutes on 2024-07-28</p>
                    </li>
                    <li>
                        <p><strong>Strength Training:</strong> 45 minutes on 2024-07-27</p>
                    </li>
                </ul>
            </div>
            <div className="next-goals">
                <h2>Next Goals</h2>
                <ul>
                    <li>
                        <p><strong>Improve Flexibility:</strong> Attend 3 yoga classes this month</p>
                    </li>
                    <li>
                        <p><strong>Increase Strength:</strong> Complete a strength training program</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MyDashboard;
