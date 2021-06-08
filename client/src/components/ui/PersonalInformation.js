import React from 'react';
import './PersonalInformation.css';
import InputText from '../controls/InputText';
import Label from '../controls/Label';
import profilePicture from '../../assets/download.png';
import Menu from './Menu';
import { GiBelt, GiPhone } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import { ImUser } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

const PersonalInformation = () => {
    


    return (
        <div className="information">
            <div className="profile-picture">
                <img src={profilePicture} alt="Profile" />
            </div>
            <Menu />
            <div className="data-input">
                <div className="group-input">
                    <h4>Profile</h4>
                </div>
                <div className="group-input">
                    <Label text="Team name" />
                    <p> <RiTeamFill  className="icon"/> Orlando Pirates</p>
                </div>
                <div className="group-input">
                    <Label text="Email" />
                    <p><MdEmail  className="icon"/> keletsovincent92@gmail.com</p>
                </div>
                <div className="group-input">
                    <Label text="Telephone" />
                    <p> <GiPhone  className="icon"/> +27 664 013 806</p>
                </div>
                {
                    true && <>
                        <div className="group-input">
                            <Label text="Manager" />
                        <p> <ImUser  className="icon"/> Mr Monama</p>
                        </div>
                        <div className="group-input">
                            <Label text="Captain" />
                        <p><GiBelt  className="icon"/> Tadima Monama</p>
                        </div>
                    </>
                } 
             </div>           
        </div>
    );
};

export default PersonalInformation;