import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"

import HomePage from "./pages/HomePage"
import WeatherPage from "./pages/WeatherPage"

const Container = styled.div`
  background-color: black;
`

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/weather" component={WeatherPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App