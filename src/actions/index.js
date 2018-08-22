import axios from 'axios';

const API_key = '275a40e07218c57c86eac371036efd52';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) { 

    const url = `${ROOT_URL}&q=${city},us`;
    const request  = axios.get(url);
     
    return {
        type : FETCH_WEATHER,
        payload : request
    };
}