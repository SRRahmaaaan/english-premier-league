import "./TeamDetails.css"
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Header from "../Header/Header"
import Found from "./found.png"
import Football from "./football.png"
import Gender from "./gender.png"
import Flag from "./flag.png"

const TeamDetails = () => {
    const [teamDetails, setTeamDetails] = useState({})
    const {teamId} = useParams()
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setTeamDetails(data.teams[0]))
    },[url])
    const { strAlternate, intFormedYear, strCountry, strGender, strSport, strTeamBadge, strDescriptionEN,strStadium,
                strStadiumDescription,strStadiumThumb, } = teamDetails;
    console.log(teamDetails)
    return (
        <section className = "team-details">
            <Header><img src={strTeamBadge} className = "team-logo" alt="TeamBadge"/></Header>
            <div className="general-info">
                <div className="info">
                    <h2>{ strAlternate}</h2>
                    <p> <img src = {Found} alt = "foundLogo"/> Formed : { intFormedYear}</p>
                    <p> <img src={Flag} alt="flagLogo"/> Country : { strCountry}</p>
                    <p> <img src={Football} alt="footballLogo"/> Type : { strSport}</p>
                    <p> <img src={Gender} alt="genderLogo"/>Gender : { strGender}</p>
                </div>
                <div className="old-new">
                    <h1>{ intFormedYear > 1900 ? "It's an nineteenth-century team" : "It's an eighteenth-century team"}</h1>
                </div>
            </div>
            <div className="description">
                <h3 className = "title">About The Club</h3>
                <p>{ strDescriptionEN}</p>
            </div>
            <div className="stadium">
                <div className="imgbx half-width">
                    <img src={strStadiumThumb} alt="Stadium" />
                </div>
                <div className="stadium-description half-width">
                    <h3 className = "title">{strStadium }</h3>
                    <p>{ strStadiumDescription}</p>
                </div>
            </div>
        </section>
    )
}

export default TeamDetails
    // strInstagram,
    //   strTwitter,
    //   strWebsite,
    //   strYoutube,
    //   strFacebook,
