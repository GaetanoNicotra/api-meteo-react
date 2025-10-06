import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cityCoordinates from '../data/coordinate'
import TemperatureCard from './TemperatureCard'
import SunsetSunrise from './SunsetSunrise'
import HumidityCard from './HumidityCard'
import Visibibility from './Visibility'
import SeaLevel from './SeaLevel'
import Header from './Header'
import Footer from './Footer'
import Wind from './Wind'
import axios from 'axios'

const WeatherCard = () => {

    // API KEY
    const apikey = import.meta.env.VITE_API_KEY

    const [meteo, setMeteo] = useState({})

    const [coordinate] = useState(cityCoordinates)

    const [selectedCity, setSelectedCity] = useState('Catania')

    // funzione per recuperare il meteo ogni volta che cambia la città
    useEffect(() => {
        if (!findCity) return
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${findCity.lat}&lon=${findCity.long}&${apikey}&units=metric&lang=it`)
            .then(resp => setMeteo(resp.data))
            .catch(err => console.error("Errore nel caricamento:", err))
    }, [selectedCity])

    // funzione per trovare la città cercata
    const findCity = coordinate.find(city => city.id === selectedCity)

    return (
        <>
            <Header name={findCity?.id} />

            {meteo && meteo.main ? (
                <div className="container">
                    <h2>Benvenuto, ecco il meteo di oggi a {meteo.name}</h2>
                    <select className='mb-3' name="citta" id="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                        {coordinate.map((c) => {
                            return <option key={c.id}> {c.id} </option>
                        })}
                    </select>
                    <div className="row mb-5">
                        <div className='d-flex justify-content-end align-items-center'>
                            <span className='info'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`}
                                        alt={meteo.weather[0].description}
                                        width={50}
                                        height={50}
                                    />
                                    <span>{meteo.weather[0].description}</span>
                                </div>
                            </span>
                        </div>
                        <TemperatureCard temp={meteo.main} />
                        <HumidityCard humid={meteo.main.humidity} />
                        <Wind wind={meteo.wind} />
                        <SunsetSunrise sunset={meteo.sys} />
                        <SeaLevel sea={meteo.main.sea_level} />
                        <Visibibility visibility={meteo.visibility} />
                    </div>
                    <Link className='text-white' to='/moredays'><h4 className='pb-3'>Vai a più giorni</h4></Link>
                </div>
            ) : (
                <span className="loader"></span>
            )}
            {meteo && meteo.main ? (
                <Footer lat={meteo.coord.lat} long={meteo.coord.lon} name={meteo.name} />
            ) : (
                <span className="loader"></span>
            )}
        </>
    )
}

export default WeatherCard
