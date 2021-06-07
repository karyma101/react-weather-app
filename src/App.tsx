import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from './pages/HomePage'
import WeatherPage from './pages/WeatherPage'

const Container = styled.div`
    background-color: black;
`

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/forecast/:country/:city" component={WeatherPage} />
                <Route path="/" component={HomePage} />
                <Route component={HomePage} />
            </Switch>
        </Router>
    )
}

export default App
