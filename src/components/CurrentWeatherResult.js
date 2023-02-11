import React from "react";
import { convertCelsiusToFahrenheit } from "../utils";
import "./CurrentWeatherResult.css";

const CurrentWeatherResult = ({ unit, weather, location }) => {
  //TO DO: If weather = null , fetch data for current location using useEffect?

  if (weather === null) {
    return <h1>Please enter a city to fetch weather data.</h1>;
  }
  let temp = Number(weather.main.temp.toFixed(1));
  if (unit === "F") {
    temp = convertCelsiusToFahrenheit(temp);
  }
  console.log(weather);
  return (
    <div className="currentWeather">
      <h2>
        Current weather for {weather.name}, {weather.sys.country}
      </h2>
      <h3>{weather.weather[0].main}</h3>
      <h3>
        Temperature is {temp}
        {unit}
      </h3>
      <div className="weather-details">
        <p>
          {weather.name}, {weather.sys.country}{" "}
        </p>
        <div className="weather-details_sections">
          <h3>Max/Min:</h3>
          <span>
            {temp} /{temp} {unit}
          </span>
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
