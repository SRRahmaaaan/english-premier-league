import React from 'react'
import { Link } from 'react-router-dom';
import "./Teams.css"

const Teams = ({ info }) => {
    const { strTeamBadge, strTeam, idTeam } = info;
    return (
        <div className = "team-box">
            <img src={strTeamBadge} alt="TeamBadge" />
            <h2>{strTeam}</h2>
            <Link to = {`/team/${idTeam}`} className = "link">See More</Link>
        </div>
    )
}

export default Teams
