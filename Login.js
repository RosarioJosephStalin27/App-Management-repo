import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const validate = () => {
        let validationErrors = {};
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
            validationErrors.email = "Invalid email format";
        }

        if (!formData.password) {
            validationErrors.password = "Password is required";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (formData.email === 'admin@gmail.com' && formData.password === '125admin') {
                setMessage("Login successful!");
                navigate('/adminpanel');
            } else if (formData.email === 'user@gmail.com' && formData.password === '125user') {
                setMessage("Login successful!");
                navigate('/userpanel');
            } else if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
                setMessage("Login successful!");
                navigate('/'); // Navigate to the home page for regular users
            } else {
                setMessage("Invalid email or password.");
                console.log("Invalid email or password:", formData);
            }
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
                
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                />
                {errors.password && <span className="error">{errors.password}</span>}
                
                <button type="submit">Login</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
}

export default Login;
