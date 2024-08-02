import React from 'react';
import '../Styles/ManageTrainers.css';

const ManageTrainers = () => {
  // Sample data for trainers
  const trainers = [
    { name: 'John Doe', age: 30, address: '123 Fitness St.', specialization: 'Strength Training' },
    { name: 'Jane Smith', age: 28, address: '456 Health Ave.', specialization: 'Cardio' },
    { name: 'Mike Johnson', age: 35, address: '789 Wellness Blvd.', specialization: 'Yoga' },
  ];

  return (
    <div >
      <h1>Manage Trainers</h1>
      <div className="section12">
        <h2>Trainer List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Specialization</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer, index) => (
              <tr key={index}>
                <td>{trainer.name}</td>
                <td>{trainer.age}</td>
                <td>{trainer.address}</td>
                <td>{trainer.specialization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTrainers;
