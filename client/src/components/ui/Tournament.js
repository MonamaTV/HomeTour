import React from 'react';
import { BiCalendar, BiMedal, BiMoney, BiTrophy } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Tournament = ({tournament}) => {

    const { _id, 
            name, 
            description, 
            firstPrize, 
            joiningFee, secondPrize, startDate, endDate } = tournament;

    return (
        <Link className="tournament" to={`/tournaments/${_id}`}>
            <h2>{name}</h2>
            <p>{ description }...</p>
            <h5>Details:</h5>
            <div className="px-3">
                <h6> <BiMoney className="icon" /> Joining Fee: R{ joiningFee }</h6>
                <h6> <BiTrophy className="icon" /> Winner: R{ firstPrize }</h6>
                <h6> <BiMedal className="icon" /> 2nd: R{ secondPrize }</h6>
                <div className="tournament-date">
                    <h4> <BiCalendar className="icon" /> {startDate.slice(0, 10) } - {endDate.slice(0, 10)}</h4>
                </div>
                <div className="join">
                    {/* <Button text="join" /> */}
                </div>
            </div>
        </Link>
    );
};

export default Tournament;