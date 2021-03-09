import "./TeamDetails.css"
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"

const TeamDetails = () => {
    const [teamDetails, setTeamDetails] = useState({})
    const {teamId} = useParams()
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setTeamDetails(data.teams[0]))
    },[url])
    const { intFormedYear, strCountry, strGender, strSport, } = teamDetails
    console.log(teamDetails)
    return (
        <div>
            <p>Formed : { intFormedYear}</p>
            <p>Country : { strCountry}</p>
            <p>Type : { strSport}</p>
            <p>Gender : { strGender}</p>
        </div>
    )
}

export default TeamDetails
    // strInstagram,
    //   strStadium,
    //   strTwitter,
    //   strWebsite,
    //   strYoutube,
    //   strFacebook,
    //   strDescriptionEN,
    //   strStadiumDescription,
    //   strTeamBadge,
    //   strStadiumThumb,