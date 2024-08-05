import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">FISTPUMP</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
