<h3>Versione in italiano </h3>

# Live Meteo ⛅️  
Un'applicazione web moderna per visualizzare in tempo reale le condizioni meteorologiche delle principali città italiane.

---

## 📝 Panoramica  
**Live Meteo** è un'app sviluppata con **React** che fornisce un quadro dettagliato del meteo attuale.  
Progettata con un'**architettura a componenti** e un'interfaccia utente basata su **Bootstrap**, l'app offre un'esperienza semplice e intuitiva.  
La selezione della città avviene tramite un **menu a tendina** che permette di esplorare le condizioni delle principali città italiane.
L'app è ancora in fase di sviluppo, nelle prossime release verrà implementata una panoramica più ampia sulle informazioni metereologiche per i giorni successivi.

---

## ✨ Funzionalità  
L'app fornisce le seguenti informazioni meteo in tempo reale:

- **Dettagli sulla Temperatura:**
  - Temperatura attuale.
  - Temperatura massima e minima.
  - Temperatura percepita.
- **Pressione:** Il valore della pressione atmosferica.
- **Umidità:** Il livello di umidità nell'aria.
- **Vento:** Velocità del vento.
- **Alba e Tramonto:** Gli orari esatti di alba e tramonto.
- **Visibilità:** La distanza di visibilità orizzontale.
- **Localizzazione:** Le coordinate geografiche della città selezionata.
- **Selezione Città:** Un selettore che permette di cambiare facilmente la città.

---

## 💻 Struttura e Architettura  
Il componente **WeatherCard** gestisce lo stato dell'app e le interazioni con l'API.

- **API OpenWeatherMap:** L'app utilizza l'API OpenWeatherMap per recuperare le condizioni meteo in tempo reale.
- **Gestione dei Dati:**  
  Le città disponibili nel menu a tendina sono caricate da un file locale (`cityCoordinates.js`).  
  Quando l'utente seleziona una nuova città, l'app effettua una chiamata API per recuperare i dati specifici di quella località.
- **Architettura a Componenti:**  
  Il progetto è strutturato in componenti dedicati per ogni dato meteo (`TemperatureCard`, `HumidityCard`, `Wind`, ecc.)
- **Design:**  
  L'interfaccia utente è stata realizzata utilizzando **Bootstrap**, garantendo un design reattivo su tutti i dispositivi.

---

## 🛠️ Tecnologie Utilizzate  
Il progetto è stato realizzato con le tecnologie moderne per garantire efficienza e prestazioni:

- **Vite:** Un build tool di nuova generazione per uno sviluppo rapido.
- **React:** La libreria principale per la costruzione dell'interfaccia utente.
- **Axios:** Un client HTTP per la gestione delle chiamate API al servizio meteo.
- **Bootstrap:** Un framework CSS per un design reattivo e componenti UI predefiniti.
- **OpenWeatherMap API:** Il servizio esterno per i dati meteo.

---


<h3>🇬🇧 English Version</h3> 

# Live Meteo ⛅️  
A modern and responsive web application for displaying real-time weather conditions for major Italian cities.

---

## 📝 Overview  
**Live Meteo** is a **React** app that provides a detailed overview of the current weather.  
Designed with a **component-based architecture** and a **Bootstrap UI**, the app offers a simple and intuitive user experience.  
The city selection is made via a convenient **dropdown menu** that fetches data from a local dataset, allowing users to explore the conditions of a wide selection of Italian cities.

---

## ✨ Features  
The app provides the following real-time weather information:

- **Temperature Details:**
  - Current temperature.
  - Maximum and minimum temperature.
  - Feels like temperature.
- **Pressure:** The value of the atmospheric pressure.
- **Humidity:** The level of humidity in the air.
- **Wind:** Wind speed.
- **Sunrise and Sunset:** The exact times of sunrise and sunset.
- **Visibility:** The horizontal visibility distance.
- **Location:** The geographical coordinates of the selected city.
- **City Selection:** A dropdown selector that allows users to easily change the city.

---

## 💻 Project Structure and Architecture  
The core of the application is the **WeatherCard** component, which manages the app's state and API interactions.

- **OpenWeatherMap API:** The app uses the OpenWeatherMap API to retrieve real-time weather conditions.
- **Data Management:**  
  The cities available in the dropdown are loaded from a local file (`cityCoordinates.js`).  
  When a new city is selected, the app makes an API call to fetch that location's specific data.
- **Component-Based Architecture:**  
  The project is structured with dedicated components for each weather data point (`TemperatureCard`, `HumidityCard`, `Wind`, etc.), making the code modular and easy to maintain.
- **Design:**  
  The user interface was built using the **Bootstrap** framework, ensuring a responsive and consistent design across all devices.

---

## 🛠️ Technologies Used  
The project was built with a modern set of technologies to ensure efficiency and performance:

- **Vite:** A next-generation build tool for fast development.
- **React:** The main library for building the user interface.
- **Axios:** An HTTP client for managing API calls to the weather service.
- **Bootstrap:** A CSS framework for responsive design and predefined UI components.
- **OpenWeatherMap API:** The external service for weather data.
