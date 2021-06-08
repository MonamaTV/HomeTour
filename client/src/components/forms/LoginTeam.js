import React, { useState } from 'react';
import './Forms.css';
import Button from '../controls/Button';
import InputText from '../controls/InputText';
import Label from '../controls/Label';
import { Link } from 'react-router-dom';

const LoginTeam = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const [errors, setErrors] = useState({
       email: '',
       password: '' 
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email.length < 2) {
            setErrors({email: "Your email is invalid"});
            return;
        }

        if(password.length < 8 ) {
            setErrors({password: "Your password must 8 characters long"});
            return;
        }
        setErrors({password: '', email: ''});
    }


    return (
        <form className="form">
            <div className="group-input">
                <h3>HT</h3>
                <small>Welcome back!</small>
            </div>
            <div className="group-input">
                <Label text="Email"/>
                <InputText value={email} handleOnChange={handleEmail} />
                { errors.email && <small className="error">{ errors.email}</small>}
            </div>
            <div className="group-input">
                <Label text="Password"/>
                <InputText type="password" value={password} handleOnChange={handlePassword} />
                { errors.password && <small className="error">{ errors.password}</small>}
            </div>
            <div className="group-input">
                <a href="/password" className="forgot-password"> Forgot Password?</a>
            </div>
            <div className="group-input">
                <Button text="Login" handleClick={handleSubmit}/>
            </div>
            <div className="group-input">
                <Link to="/register/sponsor" >Don't have account? Register here.</Link>
            </div>
            <div className="group-input center">
                <small className="center">----OR----</small>
                <Button text={`Signin with Google`} type="btn-google" />
            </div>
        </form>
    );
};

export default LoginTeam;