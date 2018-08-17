const API_key = 'b6907d289e10d714a6e88b30761fae22';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    
    return {
        type : FETCH_WEATHER
    };
}