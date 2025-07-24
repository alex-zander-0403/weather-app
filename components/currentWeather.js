import { windDirection } from "../src/helpers/windDirection.js";

const currentCity = document.querySelector(".city");
const currentTemperature = document.querySelector(".temperature");
const currenteFeelsLike = document.querySelector(".feels");
const currenteDescription = document.querySelector(".description");
const currentWeatherIcon = document.querySelector(".weather-icon img");

const currentWind = document.querySelector(".wind");
const currentVisibility = document.querySelector(".visibility");
const currentHumidity = document.querySelector(".humidity");
const currentPressure = document.querySelector(".pressure");

const dayLenght = document.querySelector(".day-length");

//
export function renderCurrentWeather(data, city) {
  console.log("weatherData --->", data);

  //
  currentCity.textContent = city || "неизвестно";
  currentTemperature.textContent = `${Math.round(data.main?.temp || "?")}°C`;
  currenteFeelsLike.textContent = `Ощущается как ${Math.round(
    data.main?.feels_like || "?"
  )}°C`;
  currenteDescription.textContent =
    data.weather?.[0]?.description || "неизвестно";
  currentWeatherIcon.src = `https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@2x.png`;

  //
  currentWind.textContent = `${Math.round(data.wind?.speed || 0)} м/с`;
  const currentWindDeg = data.wind?.deg || 0;
  windDirection(currentWindDeg);

  const visibility = data.visibility || 0;
  if (visibility >= 1000) {
    currentVisibility.textContent = `${visibility / 1000} км`;
  } else {
    currentVisibility.textContent = `${visibility} м`;
  }

  currentHumidity.textContent = `${data.main?.humidity || 0}%`;

  currentPressure.textContent = `${Math.round(
    (data.main?.pressure || 0) * 0.750062
  )}мм`;

  //   dayLenght.textContent = `День длится: ${}`
}
