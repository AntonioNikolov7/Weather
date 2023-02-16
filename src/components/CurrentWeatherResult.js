import React from "react";
import { convertCelsiusToFahrenheit } from "../utils/utils";
import "./CurrentWeatherResult.css";

const CurrentWeatherResult = ({ unit, weather, location }) => {
  if (weather === null) {
    return <h1>Please enter a city to fetch weather data.</h1>;
  }
  let temp = Number(weather.main.temp.toFixed(1));
  if (unit === "F") {
    temp = convertCelsiusToFahrenheit(temp);
  }

  return (
    <div className="currentWeather">
      <h2>
        Current weather for {weather.name}, {weather.sys.country}
      </h2>
      <h3>{weather.weather[0].main}</h3>
      <h3>
        Temperature is {temp.toFixed(1)}
        {unit}
      </h3>
      <div className="weather-details">
        <p>
          {weather.name}, {weather.sys.country}{" "}
        </p>
        <div className="weather-details_sections">
          <h3>Max:</h3>
          {unit === "F"
            ? convertCelsiusToFahrenheit(weather.main.temp_max).toFixed(1)
            : weather.main.temp_max.toFixed(1)}

          {unit}
        </div>
        <div className="weather-details_sections">
          <h3>Min:</h3>
          {unit === "F"
            ? convertCelsiusToFahrenheit(weather.main.temp_min).toFixed(1)
            : weather.main.temp_min.toFixed(1)}

          {unit}
        </div>
        <div className="weather-details_sections">
          <h3>Humidity: </h3>
          <span>{weather.main.humidity}%</span>
        </div>
        <div className="weather-details_sections">
          <h3>Pressure: </h3>
          <span>{weather.main.pressure}hPa</span>
        </div>
        <div className="weather-details_sections">
          <h3>Visibility: </h3>
          <span>{weather.visibility / 1000}km</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherResult;
