import React, { useEffect, useState } from 'react';
import './Tournaments.css';
import { GiSoccerBall } from 'react-icons/all';
import Tournament from '../ui/Tournament';
import useFetch from '../../hooks/useFetch';

const Tournaments = () => {

    const [tournaments, setTournaments] = useState([]);
    
    const tempTournaments = useFetch("/sponsors/tournaments");

    useEffect(() => {
        setTournaments(tempTournaments?.data?.tournaments)
    }, [tempTournaments]);

    return (
        <div className="tournaments">
            <div className="tournaments-header">
                <h3><GiSoccerBall className="icon" /> Tournaments</h3>
                <small>All the public tournaments for you to join</small>
            </div>
            <div className="tournament-buttons">
                <button >
                    All
                </button>

                <button >
                    Prev
                </button>

                <button className="active">
                    Upcoming
                </button>
            </div>
            <div className="tournaments-list">
                {
                    tournaments ?
                    tournaments.map(tournament => (
                        <Tournament key={tournament._id} tournament={tournament}/>
                    )): "Loading..."
                }
            </div>
        </div>
    )
}

export default Tournaments;
