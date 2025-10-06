import React from 'react'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import cityCoordinates from '../data/coordinate'

const MoreDays = () => {

    // API KEY
    const apikey = import.meta.env.VITE_API_KEY

    // variabile che contiene le coordinate
    const [coordinate] = useState(cityCoordinates)

    // variabile che contine i dati di tutti i giorni
    const [moreDays, setMoreDays] = useState([])

    // variabile per le città della select
    const [selectedCity, setSelectedCity] = useState('Catania')

    // funzione per reucuperare i dati meteo su piu giorni
    useEffect(() => {
        async function getMoreDays() {
            try {
                const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${findCity.lat}&lon=${findCity.long}&cnt=40&${apikey}&units=metric&lang=it`)
                const res = await data.json()
                setMoreDays(res.list)
            } catch (error) {
                console.error('Errore nel recupero prodotti:', error);
            }
        }
        getMoreDays();
    }, [selectedCity])
    console.log(moreDays)
    // funzione per trovare la città cercata
    const findCity = coordinate.find(city => city.id === selectedCity)

    return (
        <>
            <Header />

            {moreDays && moreDays.length > 0 ? (
                <div className="container">
                    <h2 className='mt-5'>
                        Previsioni meteo dal{' '}
                        <span className='text-decoration-underline'>{moreDays[0].dt_txt.slice(0, 10).split('-').reverse().join('-')}</span> al{' '}
                        <span className='text-decoration-underline'> {moreDays[moreDays.length - 1].dt_txt.slice(0, 10).split('-').reverse().join('-')}</span>
                    </h2>

                    <select className='mb-5' name="citta" id="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                        {coordinate.map((c) => {
                            return <option key={c.id}> {c.id} </option>
                        })}
                    </select>

                    <div className="row">
                        {moreDays.map((m, index) => {
                            return (
                                <>
                                    <div className='d-flex'>
                                        <ul key={index} className='card-days'>
                                            <img
                                                src={`https://openweathermap.org/img/wn/${m.weather[0].icon}@2x.png`} />
                                            <li>{m.weather[0].description.toUpperCase()}</li>
                                            <li> Max {m.main.temp_min.toFixed(1)}° - Min {m.main.temp_max.toFixed(1)}° | Umidità: {m.main.humidity} %</li>

                                            <li><details>
                                                <summary className='mb-2'>Altre informazioni</summary>
                                                <p>Ci saranno: {m.main.temp.toFixed(1)}° e percepiti: {m.main.feels_like.toFixed(1)}°</p>
                                                <p>Vento: {m.wind.speed} km/h</p>
                                                <p>Visibilità {m.visibility / 1000} km</p>
                                                <p>Pressione: {m.main.pressure} mb</p>
                                            </details>
                                            </li>
                                        </ul>

                                        <div className='card-days date-days'>
                                            <p>📆 {m.dt_txt.slice(0, 10).split('-').reverse().join('-')}</p>
                                            <p>🕑 {m.dt_txt.slice(10, 16)}</p>
                                        </div >
                                    </div>
                                </>
                            )
                        })}
                    </div >
                </div >

            ) : (
                <span className="loader"></span>
            )}

            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
                            <ul className="list-unstyled d-flex gap-4 mb-0 align-items-center">
                                <li className="d-flex align-items-center gap-2">Twitter</li>
                                <li className="d-flex align-items-center gap-2">Facebook</li>
                                <li className="d-flex align-items-center gap-2">Instagram</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <ul className="list-unstyled d-flex gap-4 mb-0">
                                <li>Contattaci</li>
                                <li>Info</li>
                                <li>Su di noi</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-secondary my-4" />
                    <div className="text-center text-secondary small">
                        <div>LiveMeteo © 2025 - 2025</div>
                        <div>Tutti i diritti sono riservati</div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default MoreDays
