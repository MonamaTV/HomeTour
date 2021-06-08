import React from 'react';
import './Profile.css';
import PersonalInformation from '../ui/PersonalInformation';
import Tournaments from './Tournaments';

const Profile = () => {

    return (
        <div className="profile">
            <div className="personal-info">
                <PersonalInformation />
            </div>
            <div className="tournaments-info">
                <Tournaments />
            </div>
        </div>
    );
};

export default Profile;

