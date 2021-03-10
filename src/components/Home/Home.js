import React from 'react'
import "./Home.css"
import { useState, useEffect } from "react"
import Teams from "../Teams/Teams"
import Header from '../Header/Header'
import Logo from "./leagueLogo.jpg"

const Home = () => {
    const [information, setInformation] = useState([])
    useEffect(() => {
        const url ="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
        fetch(url)
        .then(response => response.json())
        .then(data => setInformation(data.teams))
    }, [])
    return (
        <section>
            <Header>
                <img className = "league-logo" src={Logo} alt="League Logo"/>
            </Header>
            <div className = "team-container">
            {
                information.map(info => <Teams info = {info} key = {info.idTeam}></Teams> )
            }
        </div>
        </section>
    )
}

export default Home
