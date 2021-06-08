import React, { useEffect, useState } from 'react';
import { BiCalendar, BiMedal, BiMoney, BiTrophy } from 'react-icons/bi';
import { GiSoccerBall } from 'react-icons/gi';
import { SiGooglemaps } from 'react-icons/si';

import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Button from '../controls/Button';
import Modal from '../controls/Modal';
import Location from '../ui/Location';
import Payment from './Payment';

const TournamentDetails = () => {

    const { id } = useParams();

    const tournamentData = useFetch(`/sponsors/tournaments/${id}`);

    const [tournament, setTournament] = useState(null);

    const [join, setJoin] = useState(false);

    useEffect(() => {
        setTournament(tournamentData?.data?.data);
    }, [tournamentData]);

    const joinTournament = () => {
        setJoin(true);
    };



    return (
        tournament ? <div className="tournament-details">
            <div className="details">
                <h3><GiSoccerBall className="icon" /> { tournament.name }</h3>
                <p>{ tournament.description }</p>
                <h4>Details</h4>
                <div className="px-3 prize">
                    <h6> <BiMoney className="icon" /> Joining Fee: R{ tournament.joiningFee }</h6>
                    <h6> <BiTrophy className="icon" /> Winner: R{ tournament.firstPrize }</h6>
                    <h6> <BiMedal className="icon" /> 2nd: R{ tournament.secondPrize }</h6>
                    <div className="tournament-date">
                        <h6> <BiCalendar className="icon" /> {tournament.startDate.slice(0, 10) } - { tournament.endDate.slice(0, 10)}</h6>
                    </div>
                </div>
                <hr />
                <h4>Location</h4>
                <Location location={tournament.location} />
            </div>
            
            <div className="join-tournament">
                <small>By joining the tournament means you agree to the teams and conditions <span><a href="/">Read more...</a></span></small>
                <input type="checkbox"/><span>Agree?</span>
                <Button text="join tournament" handleClick={joinTournament} />
            </div>
            {
                join && <Modal>
                    <Payment />
                </Modal>
            }
        </div> : "Loading..."
    );
};

export default TournamentDetails;