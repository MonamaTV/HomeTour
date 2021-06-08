import React from 'react';
import './Payment.css';
import { SiMastercard, SiVisa } from 'react-icons/si';
import Button from '../controls/Button';
import InputText from '../controls/InputText';
import Label from '../controls/Label';

const Payment = () => {

    return (
        <div className="payment-info">
            <div className="payment-methods">
                <h3>Payment Details  </h3>
                <SiVisa className="icon" />
                <SiMastercard className="icon"/>
            </div>
            <div className="card-info">
                <div className="group-input">
                    <Label text="Card number" />
                    <InputText placehold="xxxx xxxx xxxx xxxx" />
                </div>
                <div className="card">
                    <div className="group-input">
                        <Label text="Expiry date" />
                        <input type="date" placeholder="mm / dd" />
                    </div>
                    <div className="group-input">
                        <Label text="CVC" />
                        <InputText placehold="cvc"  />
                    </div>
                </div>
                <div className="group-input">
                    <Label text="Card holder" />
                    <InputText placehold="e.g   John Wick" />
                </div>
                <div className="group-input">
                    <Button text="Pay Now R1000"/>
                </div>
            </div>
            
        </div>
    );
};

export default Payment;