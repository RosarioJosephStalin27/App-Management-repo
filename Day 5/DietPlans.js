import React from 'react';
import '../Styles/DietPlans.css'; // Import the CSS file

const DietPlans = () => {
    return (
        <div className="diet-plans-container-unique">
            <h1>Nutrition Plan</h1>
            <div className="diet-plan-unique">
                <h2>Current Diet Plan</h2>
                <ul className="diet-plan-list-unique">
                    <li className="diet-plan-item-unique">
                        <h3>Breakfast</h3>
                        <p>Oatmeal with fruits</p>
                    </li>
                    <li className="diet-plan-item-unique">
                        <h3>Lunch</h3>
                        <p>Grilled chicken with salad</p>
                    </li>
                    <li className="diet-plan-item-unique">
                        <h3>Dinner</h3>
                        <p>Salmon with vegetables</p>
                    </li>
                    <li className="diet-plan-item-unique">
                        <h3>Snacks</h3>
                        <p>Nuts and yogurt</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DietPlans;
