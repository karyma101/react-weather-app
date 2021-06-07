import React from 'react'
import Background from '../components/Background'

const WeatherPage = ({ match }: any) => {
    const { country, city } = match.params

    return <Background>Weather Page</Background>
}

export default WeatherPage
