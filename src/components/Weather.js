import React, { useEffect, useState } from "react";

import "./Weather.css";

import { useSelector, useDispatch } from "react-redux";
import { unitC, unitF } from "./store/unitSwitch";
import Button from "./shared/Button";
import CurrentWeatherResult from "./CurrentWeatherResult";
import Forecast from "./Forecast";
import VideoBackground from "./VideoBackground";
import SimpleSnackbar from "./shared/snackbar/Snack";
import Search from "./Search";

const ENTER_KEY = 13;

const videoClouds =
  "https://media.istockphoto.com/id/836470700/video/rain-clouds.mp4?s=mp4-640x640-is&k=20&c=qsD_Otvqq8PD8AgpSsTMTjnLGzXhMeb7AypOOFWt5BY=";
const videoRain =
  "https://media.istockphoto.com/id/1400084130/video/tropical-garden-during-the-rain-shower-naturally-blurred-background.mp4?s=mp4-640x640-is&k=20&c=FpA6ybYaWZf8caGOK9rcWgJW5u3odV9u-Og3dZRppg4=";
const videoSunny =
  "https://media.istockphoto.com/id/673210004/video/perfect-sunrise-with-mountains-with-big-orange-sun-and-decent-lens-flair.mp4?s=mp4-640x640-is&k=20&c=5cGx_VBtlM3dPDwhoqlH-Ho_dp6tLBIpcIZ48_UYgWE=";
const videoSnow =
  "https://media.istockphoto.com/id/1354145956/video/view-of-snowflakes-falling-in-a-very-windy-storm.mp4?s=mp4-640x640-is&k=20&c=gWKP_IfOCNxHGSnhqBd4qZ7ClBsVPPrsvmm3JSFaYKA=";

const WeatherInputs = () => {
  const [weather, setWeather] = useState(null);
  const [enteredCity, setEnteredCity] = useState("");
  const [mode, setMode] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const { unit } = useSelector((state) => state.unitSwitch);
  const dispatch = useDispatch();

  const Api_Key = "eed5548dbdaf988a17640ac6bb2bffd8";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${Api_Key}&units=metric `;

  //first rendering, initial data loading
  useEffect(() => {
    //fetch current location
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  useEffect(() => {
    (async () => {
      if (userLocation) {
        const URL_CURRENT = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${Api_Key}&units=metric `;

        const localWeather = await fetch(URL_CURRENT)
          .then((res) => res.json())
          .then((data) => data);
        setWeather(localWeather);
      }
    })();
  }, [userLocation]);

  const successCallback = (position) => {
    if (position.coords) {
      setUserLocation(position.coords);
    }
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  const getWeather = async () => {
    if (enteredCity.length < 1) {
      return;
    }
    const weatherData = await fetch(URL)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => {
        console.log(error);
        return;
      });

    if (weatherData.cod !== "404") {
      setWeather(weatherData);
      setMode("current");
      setEnteredCity("");
    }
  };

  const getBackgroundVideo = () => {
    if (weather != null && weather?.weather?.length > 0) {
      const currentWeather = weather?.weather[0]?.main?.toLowerCase();
      if (currentWeather === "clear") {
        return videoSunny;
      } else if (currentWeather === "clouds") {
        return videoClouds;
      } else if (currentWeather === "rain") {
        return videoRain;
      } else if (currentWeather === "snow") {
        return videoSnow;
      }
    }
    return videoClouds;
  };

  return (
    <>
      <div>
        <div className="main">
          <VideoBackground src={getBackgroundVideo()} />
          <Search
            weather={weather}
            onGetWeather={getWeather}
            onCityChange={setEnteredCity}
            onModeChange={setMode}
            value={enteredCity}
          />
        </div>
      </div>

      {mode === "forecast" ? (
        <Forecast weather={weather} />
      ) : (
        <CurrentWeatherResult unit={unit} weather={weather} />
      )}
    </>
  );
};

export default WeatherInputs;
