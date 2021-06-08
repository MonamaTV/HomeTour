import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    
    return (
        <div className="menu-container">
            <Link to="/editprofile" className="menu-btn">Edit profile</Link>
            <Link to="/tournaments" className="menu-btn">Tournaments</Link>
            <Link to="results" className="menu-btn">See results</Link>
        </div>
    );
};

export default Menu;