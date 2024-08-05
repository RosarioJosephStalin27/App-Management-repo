import React from 'react';
import '../Styles/WorkoutPlan.css';

const WorkoutPlans = () => {
  // Sample data for workout plans
  const workoutPlans = [
    { name: 'Barbell Curl', description: 'A comprehensive full-body workout.', imageClass: 'barbell-curl' },
    { name: 'Cardio Blast', description: 'High-intensity cardio exercises.', imageClass: 'cardio-blast' },
    { name: 'Strength Training', description: 'Build muscle with strength exercises.', imageClass: 'strength-training' },
    { name: 'Yoga Routine', description: 'Relax and stretch with yoga poses.', imageClass: 'yoga-routine' },
  ];

  return (
    <div>
      <h1>Workout Plans</h1>
      <div className="curlss">
        <h2>Plan List</h2>
        <div className="workout-list">
          {workoutPlans.map((plan, index) => (
            <div className="workout-card" key={index}>
              <div className={`workout-image ${plan.imageClass}`}></div>
              <div className="workout-info">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlans;
