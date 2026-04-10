
import axios from 'axios'
import { getUserLocation } from "./components/location";
import {getCurrentWeatherForLocation, getWeatherForUpcomingDays, getWeatherInFuture} from "./components/weatherApi";
import { getDateInFuture } from "./helpers/dateHelper";
import {getGeolocationForCoords} from "./components/openWeatherApi";

let location = localStorage.getItem("location") || getUserLocation();
updateLocation(location);

document.getElementById("changeLocation").addEventListener("click", () => {
    updateLocation(getUserLocation());
});

document.getElementById("showWeatherForMyLocation").addEventListener("click", async () => {
    if(!navigator.geolocation) {
        return alert("Vas browser ne podrzava prikazivanje geo lokacije.");
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        let coords = await getGeolocationForCoords(lat, lon);

        let cityName = coords.data[0].name;

        if(cityName.includes("Municipality")) {
            cityName = cityName.replace("Municipality", "");
        }

        updateLocation(cityName);
    });
});

const response = await getCurrentWeatherForLocation(location);

    if(!response.data.current.is_day) {
        document.body.style.backgroundColor = "#383838";
    }

    document.getElementById("day1Weather").addEventListener("click", async () => {
        const forecastResponse = await getWeatherForUpcomingDays(location, 1);
        if(forecastResponse.data.forecast.forecastday.length === 1) {
            document.getElementById("day1Holder").classList.remove("d-none");
            document.getElementById("day3Holder").classList.add("d-none");
            document.getElementById("day14Holder").classList.add("d-none");
        }

        let weatherInfo = document.querySelector(".weatherInfo");

        for(let forecast of forecastResponse.data.forecast.forecastday) {
            weatherInfo.innerText = "Na dan: " + forecast.date +
                " maksimalna temperatura ce iznositi: " + forecast.day.maxtemp_c +
                ", a minimalna: " + forecast.day.mintemp_c;

            let condition = forecast.day.condition.text;

            if(condition.includes("Overcast") || condition.includes("Cloudy")) {
                document.getElementById("day1Img").setAttribute("src", "./pictures/overcast%20icon.png");
            } else if(condition.includes("Sunny")) {
                document.getElementById("day1Img").setAttribute("src", "./pictures/sunny%20icon.png");
            } else if(condition.includes("rain") || condition.includes("Rain")) {
                document.getElementById("day1Img").setAttribute("src", "./pictures/rain%20icon.png");
            }
        }
    });

    document.getElementById("day3Weather").addEventListener("click", async() => {
        const forecastResponse = await getWeatherForUpcomingDays(location, 3);

        if(forecastResponse.data.forecast.forecastday.length === 3) {
            document.getElementById("day1Holder").classList.add("d-none");
            document.getElementById("day3Holder").classList.remove("d-none");
            document.getElementById("day14Holder").classList.add("d-none");
        }

        let weatherInfos = document.querySelectorAll(".weatherInfos");
        let images = document.querySelectorAll(".day3Img");

        for (let i = 0; i < forecastResponse.data.forecast.forecastday.length; i++) {
            let forecast = forecastResponse.data.forecast.forecastday[i];

            weatherInfos[i].innerText =
                "Na dan: " + forecast.date +
                " maksimalna temperatura ce iznositi: " + forecast.day.maxtemp_c +
                ", a minimalna: " + forecast.day.mintemp_c;


            let condition = forecast.day.condition.text;
            if (condition.includes("Overcast") || condition.includes("Cloudy")) {
                images[i].setAttribute("src", "./pictures/overcast%20icon.png");
            } else if(condition.includes("Sunny")) {
                images[i].setAttribute("src", "./pictures/sunny%20icon.png");
            } else if(condition.includes("rain") || condition.includes("Rain")) {
                images[i].setAttribute("src", "./pictures/rain%20icon.png");
            }
        }
    });

document.getElementById("day14Weather").addEventListener("click", async() => {
    const forecastResponse = await getWeatherForUpcomingDays(location, 14);
    console.log(forecastResponse);

    if (forecastResponse.data.forecast.forecastday.length === 14) {
        document.getElementById("day1Holder").classList.add("d-none");
        document.getElementById("day3Holder").classList.add("d-none");
        document.getElementById("day14Holder").classList.remove("d-none");
    }

    let weatherInfos14 = document.querySelectorAll(".weatherInfos14");
    let images = document.querySelectorAll(".day14Img");

    for (let i = 0; i < forecastResponse.data.forecast.forecastday.length; i++) {
        let forecast = forecastResponse.data.forecast.forecastday[i];

        weatherInfos14[i].innerText =
            "Na dan: " + forecast.date +
            " maksimalna temperatura ce iznositi: " + forecast.day.maxtemp_c +
            ", a minimalna: " + forecast.day.mintemp_c;


        let condition = forecast.day.condition.text;
        if (condition.includes("Overcast") || condition.includes("Cloudy")) {
            images[i].setAttribute("src", "./pictures/overcast%20icon.png");
        } else if(condition.includes("Sunny")) {
            images[i].setAttribute("src", "./pictures/sunny%20icon.png");
        } else if(condition.includes("rain") || condition.includes("Rain")) {
            images[i].setAttribute("src", "./pictures/rain%20icon.png");
        }
    }
});

const dateFormatted = getDateInFuture(30);

const futureWeather = await getWeatherInFuture(location, dateFormatted);

function updateLocation(newLocation) {
    location = newLocation;
    localStorage.setItem("location", newLocation);
}





