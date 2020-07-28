const API_KEY = '0e534b9ba5862d894024f3dc71035201';
export function getByCity(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${API_KEY}`).then(rsp => rsp.json())
}

export function getForecast(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&&appid=${API_KEY}`).then(rsp => rsp.json())
}