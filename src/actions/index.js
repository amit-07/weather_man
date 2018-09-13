import axios from 'axios';
const API_KEY = 'c6aeb1cf4b228a5326fb26485afbde98';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},IN`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}