import React, { useState } from 'react';
import './Home.css';
import backImage from '../../assets/main1.jpg';
import Button from '../controls/Button';
import Showcase from '../ui/Showcase';

const Home = () => {

    const [changeScreen, setChangeScreen] = useState(false);
    const [route, setRoute] = useState("");

    const moveToLoginScreen = () => {
        setRoute("login");
        setChangeScreen(!changeScreen);
    }
    const moveToRegisterScreen = () => {
        setRoute("register");
        setChangeScreen(!changeScreen);
    }

    return (
        <div className="home-container">
            <div className="content">
                <h1>Your <span>passion</span> and <span>love</span> for football has taken you here.</h1>
                <small>HT helps you organize and create football tournaments. Let's get started!</small>
                <Button text="Register" handleClick={moveToRegisterScreen}/>
                <Button text="Login" type="btn-secondary" handleClick={moveToLoginScreen}/>
            </div>
            <div className="img-container">
                <img src={backImage} alt="Showcase" />
            </div>
            {
                changeScreen && <Showcase route={route} closeModal={setChangeScreen} />
            }
        </div>
    );
};

export default Home;