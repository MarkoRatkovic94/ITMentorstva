
import axios from "axios"
import { getUserLocation } from "./components/location";
import { getCurrentWeatherForLocation, getWeatherForUpcomingDays } from "./components/weatherApi";

const apiKey = "9912552b93be45c991b151401251312";

let location = localStorage.getItem("location") || getUserLocation();
localStorage.setItem("location", location);

document.getElementById("changeLocation").addEventListener("click", () => {
    location = getUserLocation();
    localStorage.setItem("location", location);
});

const response = await getCurrentWeatherForLocation(location);

if(!response.data.current.is_day) {
        document.querySelector("body").style.backgroundColor = "#383838";
}

const forecastResponse = await getWeatherForUpcomingDays(location, 5);
for(let forecast of forecastResponse.data.forecast.forecastday) {
    console.log("Na dan: "+forecast.date+" maksimalna temperatura ce biti: "+forecast.day.maxtemp_c+", a minimalna: "+forecast.day.mintemp_c);
}

