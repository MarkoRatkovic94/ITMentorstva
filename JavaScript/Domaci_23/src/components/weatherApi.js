import axios from "axios";

const apiKey = "9912552b93be45c991b151401251312";

export async function getCurrentWeatherForLocation(location) {
    return await axios.get("https://api.weatherapi.com/v1/current.json", {
        params: {
            key: apiKey,
            q: location,
            aqi: "no"
        }
    });
}

export async function getWeatherForUpcomingDays(location, days) {
    return await axios.get("https://api.weatherapi.com/v1/forecast.json", {
        params: {
            key: apiKey,
            q: location,
            days: days,
            aqi: "no",
            alerts: "no"
        }
    });
}