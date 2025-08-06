import React, { useEffect, useState } from 'react'
import cityCoordinates from '../data/coordinate'
import TemperatureCard from './TemperatureCard'
import SunsetSunrise from './SunsetSunrise'
import HumidityCard from './HumidityCard'
import Visibibility from './Visibility'
import SeaLevel from './SeaLevel'
import Header from './Header'
import Wind from './Wind'
import axios from 'axios'

const WeatherCard = () => {

    // API KEY
    const apikey = import.meta.env.VITE_API_KEY

    const [meteo, setMeteo] = useState({})

    const [coordinate] = useState(cityCoordinates)

    const [selectedCity, setSelectedCity] = useState('Catania')

    // funzione per trovare la città cercata
    const findCity = coordinate.find(city => city.id === selectedCity)

    // recupera il meteo ogni volta che cambia la città
    useEffect(() => {
        if (!findCity) return
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${findCity.lat}&lon=${findCity.long}&${apikey}& units= metric`)
            .then(resp => setMeteo(resp.data))
            .catch(err => console.error("Errore nel caricamento:", err))
    }, [selectedCity])

    return (
        <>
            <Header name={meteo.name} />

            {meteo && meteo.main ? (
                <div className="container">
                    <h2>Benvenuto, ecco il meteo di oggi a {meteo.name}</h2>
                    <select name="citta" id="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                        {coordinate.map((c) => {
                            return <option key={c.id}> {c.id} </option>
                        })}
                    </select>
                    <div className="row mb-5">
                        <div className='d-flex justify-content-end align-items-center'>
                            <span className='info'>
                                <div>{meteo.weather[0].description}</div>
                                Latitudine: {meteo.coord.lat.toFixed(1)}° | Longitudine: {meteo.coord.lon.toFixed(1)}°
                            </span>
                        </div>
                        <TemperatureCard temp={meteo.main} />
                        <HumidityCard humid={meteo.main.humidity} />
                        <Wind wind={meteo.wind} />
                        <SunsetSunrise sunset={meteo.sys} />
                        <SeaLevel sea={meteo.main.sea_level} />
                        <Visibibility visibility={meteo.visibility} />
                    </div>
                </div>
            ) : (
                "Caricamento..."
            )}
        </>
    )
}

export default WeatherCard
