import React, { useState } from 'react';
import Button from '../controls/Button';
import InputText from '../controls/InputText';
import Label from '../controls/Label';

const RegisterSponsor = () => {

    const [formStep, setFormStep] = useState(1);

    const nextScreen = () => setFormStep(formStep + 1);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telephone, setTelephone] = useState("");

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        telephone: '',
    })

    switch(formStep) {
        case 1:  return (
            <form className="form">
                <div className="group-input">
                    <h2>Welcome to HT</h2>
                    <small>Please provide your details</small>
                </div>
                <div className="group-input">
                    <Label text="Name"/>
                    <InputText value={name} />
                </div>
                <div className="group-input">
                    <Label text="Email"/>
                    <InputText />
                </div>
                <div className="group-input">
                    <Label text="Telephone"/>
                    <InputText  />
                </div>
                <div className="group-input">
                    <Button text="Next" handleClick={nextScreen}  />
                </div>
                <div className="group-input center">
                    <small className="center">----OR----</small>
                    <Button text={`Signin with Google`} type="btn-google" />
                </div>
            </form>
        )
        case 2:  return (
            <form className="form">
                <div className="group-input">
                    <h2>Secure your profile</h2>
                    <small>Last step and we are set</small>
                </div>
                <div className="group-input">
                    <Label text="Password"/>
                    <InputText value={"passowd"} />
                </div>
                <div className="group-input">
                    <Label text="Re-enter Password"/>
                    <InputText  type="password"/>
                </div>
                <div className="group-input">
                    <Button text="Register" />
                </div>
            </form>
        )
        default: return (
            "Lol"
        );
    }
 
}

export default RegisterSponsor;
