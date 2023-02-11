import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  convertCelsiusToFahrenheit,
  convertSecondsTimestampToDateString,
} from "../utils";
import "./Forecast.css";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MAX_DISPLAYED_DAYS = 5;

const Forecast = ({ weather }) => {
  const [forecast, setForecast] = useState(null);
  const Api_Key = "eed5548dbdaf988a17640ac6bb2bffd8";
  const URL_Forecast = `https://api.openweathermap.org/data/3.0/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${Api_Key}&units=metric`;
  const { unit } = useSelector((state) => state.unitSwitch);

  useEffect(() => {
    (async () => {
      const foreCastData = await fetch(URL_Forecast)
        .then((res) => res.json())
        .then((data) => data);
      setForecast(foreCastData);
    })();
  }, [URL_Forecast]);

  if (forecast) {
    let dailyArray = [...forecast.daily];
    dailyArray.length = MAX_DISPLAYED_DAYS;

    return (
      <>
        <h1>
          {weather.name}, {weather.sys.country}
        </h1>
        <div className="forecast-main">
          {/* important */}
          {dailyArray.map((dayForecast) => {
            return (
              <div className="forecast-container">
                <div>
                  <h1>
                    {
                      weekday[
                        convertSecondsTimestampToDateString(
                          dayForecast.dt
                        ).getUTCDay()
                      ]
                    }
                  </h1>
                  <span>{dayForecast.weather[0].main}</span>
                </div>
                <div className="forecast-details">
                  <div>
                    <span>Max/Min:</span>
                    <span>
                      {unit === "F"
                        ? convertCelsiusToFahrenheit(
                            dayForecast.temp.max
                          ).toFixed(2)
                        : dayForecast.temp.max.toFixed(2)}
                      {unit} /{" "}
                      {unit === "F"
                        ? convertCelsiusToFahrenheit(
                            dayForecast.temp.min
                          ).toFixed(2)
                        : dayForecast.temp.min.toFixed(2)}
                      {unit}
                    </span>
                  </div>
                  <div>
                    <span>Humidity:</span>
                    <span>{dayForecast.humidity}%</span>
                  </div>
                  <div>
                    <span>Pressure:</span>
                    <span>{dayForecast.pressure}hPa</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default Forecast;
