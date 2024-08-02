import React from 'react';
import '../Styles/AdminProgressTracking.css';

const AdminProgressTracking = () => {
  return (
    <div className="progress-tracking-container">
      <h1 className="title">Progress Tracking</h1>
      <div className="section">
        <h2 className="section-title">Progress Overview</h2>
        {/* Add your progress tracking UI here */}
      </div>
      <div className="section">
        <h2 className="section-title">Time Spent on Workouts</h2>
        {/* Add time spent tracking UI here */}
      </div>
      <div className="section">
        <h2 className="section-title">Diet Recommendations</h2>
        {/* Add diet recommendations UI here */}
      </div>
      <div className="section">
        <h2 className="section-title">Total Calories Burned</h2>
        {/* Add total calories burned UI here */}
      </div>
    </div>
  );
};

export default AdminProgressTracking;
