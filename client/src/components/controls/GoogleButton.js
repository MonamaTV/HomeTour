import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import './Button.css';

const GoogleButton = ({text, handleClick}) => {

    return (
        <button className=" btn btn-google" onClick={handleClick}>
           <FaGoogle className="icon" /> {text}
        </button>

    )
};

export default GoogleButton;