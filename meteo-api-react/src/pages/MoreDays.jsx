import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
            <Header name={findCity?.id} />

            {moreDays && moreDays.length > 0 ? (
                <div className="container">
                    <h2>Previsioni meteo dal {moreDays.dt}</h2>
                    <select className='mb-3' name="citta" id="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                        {coordinate.map((c) => {
                            return <option key={c.id}> {c.id} </option>
                        })}
                    </select>

                    <div className="row">
                        {moreDays.map((m, index) => {
                            return (
                                <ul key={index} className='card-days'>
                                    <li>{m.dt_txt.slice(0, 10)}</li>
                                    <li>{m.weather[0].description}</li>
                                    <li> Max {m.main.temp_min}° - Min {m.main.temp_max}° | Umidità: {m.main.humidity} %</li>
                                    <li>{m.dt_txt.slice(10, 16)}</li>
                                </ul>
                            )
                        })}
                    </div >
                </div >

            ) : (
                <span className="loader"></span>
            )}

            <Footer />
        </>
    )
}

export default MoreDays
