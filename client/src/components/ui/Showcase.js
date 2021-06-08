import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import './Showcase.css';
const Showcase = ({closeModal, route}) => {

    const closeShowcase = () => closeModal(false);
    

    return (
        <div className="showcase">
            <CgClose 
                className="close-showcase"
                onClick={closeShowcase}
            />
            <div className="showcase-options">
                <p>Before we get started, tell us who you are?</p>
                <h1>I am a?</h1>
                <Link className="options" to={`/sponsor/${route}`}>
                    <h2>Sponsor<BsArrowRight /> </h2>
                </Link>
                <Link className="options"  to={`/team/${route}`}>
                    <h2>Team admin<BsArrowRight /></h2>
                </Link>
            </div>
        </div>
    );  
};

export default Showcase;