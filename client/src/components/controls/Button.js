import React from 'react'
import './Button.css';
const Button = ({text, type = "btn-primary", handleClick}) => {
    return (
        <button 
            onClick={handleClick} 
            className={`btn ${type}`}>{text}
        </button>
    )
}
export default Button;
