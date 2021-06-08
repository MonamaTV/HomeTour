import React, { useState } from 'react';
import './Forms.css';
import Button from '../controls/Button';
import InputText from '../controls/InputText';
import Label from '../controls/Label';
import { Link } from 'react-router-dom';
import GoogleButton from '../controls/GoogleButton';

const LoginSponsor = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

   


    return (
        <form className="form">
            <div className="group-input">
                <h3>HT</h3>
                <small>Welcome back!</small>
            </div>
            <div className="group-input">
                <Label text="Email"/>
                <InputText value={email} handleOnChange={handleEmail} />
            </div>
            <div className="group-input">
                <Label text="Password"/>
                <InputText type="password" value={password} handleOnChange={handlePassword} />
            </div>
            <div className="group-input">
                <a href="/password" className="forgot-password"> Forgot Password?</a>
            </div>
            <div className="group-input">
                <Button text="Login"/>
            </div>
            <div className="group-input">
                <Link to="/register/sponsor" >Don't have account? Register here.</Link>
            </div>
            <div className="group-input center">
                <small className="center">----OR----</small>
                <GoogleButton text={`Signin with Google`} />
            </div>
        </form>
    );
};

export default LoginSponsor;