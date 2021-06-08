import React from 'react';
import { SiGooglemaps } from 'react-icons/si';

const Location = ({location}) => {

    const { province, city, town, zipCode, streetName, fieldName } = location;
    return (
        <div className="location px-3">
            <h6>{ fieldName } </h6>
            <h6>{ province }</h6>
            <h6>{ city }</h6>
            <h6>{ town }, { streetName }</h6>
            <h6>{ zipCode }</h6>
            <a href="/"><SiGooglemaps className="icon" /> Open Google Maps</a>
        </div>
    );
};

export default Location;