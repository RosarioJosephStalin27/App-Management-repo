import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import AdminPanel from './Components/AdminPanel';
import UserPanel from './Components/UserPanel';
import Services from './Components/Services';
import ProgressTracker from './Components/ProgressTracker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
import ManageMembers from'./Components/ManageMembers';
import ManageTrainers from'./Components/ManageTrainers';
import AdminProgressTracking from './Components/AdminProgressTracking';
import MyDashboard from './Components/MyDashboard';
import WorkoutPlans from './Components/WorkoutPlans';

const workouts = [
  { name: 'Chest Day', date: '2024-07-01', progress: 80 },
  { name: 'Leg Day', date: '2024-07-03', progress: 60 },
  { name: 'Cardio', date: '2024-07-05', progress: 90 },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/progress-tracking" element={<ProgressTracker workouts={workouts} />} /> */}
        <Route path="/userpanel" element={<UserPanel />} />
        <Route path="/adminpanel/*" element={<AdminPanel />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-members" element={<ManageMembers />} />
        <Route path="/manage-trainers" element={<ManageTrainers />} />
        <Route path="adminprogress-tracking" element={<AdminProgressTracking />} />
        <Route path="/userpanel/*" element={<UserPanel />} />
        <Route path="/mydashboard" element={<MyDashboard />} />
        <Route path="/progresstracker" element={<ProgressTracker />} />
        <Route path="/workoutplans" element={<WorkoutPlans />} />
      </Routes>
    </div>
  );
}

export default App;
