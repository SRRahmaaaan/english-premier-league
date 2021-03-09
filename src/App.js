import "./App.css"
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import TeamDetails from "./components/TeamDetails/TeamDetails"
import NotMatch from "./components/NotMatch/NotMatch"

const App = () => {
  return (
    <Router>
      <Switch>

        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/home">
          <Home />
        </Route>
        <Route path = "/team/:teamId">
          <TeamDetails />
        </Route>
        <Route path = "*">
          <NotMatch />
        </Route>

      </Switch>
    </Router>
  )
}

export default App
