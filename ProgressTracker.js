import React from 'react';
import '../Styles/ProgressTracker.css';

const ProgressTracker = () => {
    return (
        <div className="progress-tracker-container-unique">
            <h1>Progress Tracker</h1>
            <div className="progress-summary-unique">
                <h2>Workout Summary</h2>
                <div className="progress-content-unique">
                    <div className="progress-card-unique">
                        <h3>Total Workouts</h3>
                        <p>25</p>
                    </div>
                    <div className="progress-card-unique">
                        <h3>Total Calories Burned</h3>
                        <p>12000 kcal</p>
                    </div>
                    <div className="progress-card-unique">
                        <h3>Active Days</h3>
                        <p>20</p>
                    </div>
                </div>
            </div>
            <div className="progress-chart-unique">
                <h2>Calories Burned Over Time</h2>
                <div className="progress-bar-container-unique">
                    <div className="progress-bar-unique" style={{ width: '25%' }}>Week 1: 400 kcal</div>
                    <div className="progress-bar-unique" style={{ width: '50%' }}>Week 2: 500 kcal</div>
                    <div className="progress-bar-unique" style={{ width: '75%' }}>Week 3: 600 kcal</div>
                    <div className="progress-bar-unique" style={{ width: '100%' }}>Week 4: 700 kcal</div>
                </div>
            </div>
            <div className="recent-workouts-unique">
                <h2>Recent Workouts</h2>
                <table className="workouts-table-unique">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Workout</th>
                            <th>Duration</th>
                            <th>Calories Burned</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2024-07-28</td>
                            <td>Cardio</td>
                            <td>30 mins</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>2024-07-27</td>
                            <td>Strength Training</td>
                            <td>45 mins</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td>2024-07-26</td>
                            <td>Yoga</td>
                            <td>60 mins</td>
                            <td>200</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProgressTracker;
