import React from "react";
import { useDispatch } from "react-redux";
import Button from "./shared/Button";
import { unitC, unitF } from "./store/unitSwitch";

const ENTER_KEY = 13;

const Search = ({
  value,
  weather,
  onGetWeather,
  onCityChange,
  onModeChange,
}) => {
  const dispatch = useDispatch();

  function handleKeyDown(event) {
    if (event.keyCode === ENTER_KEY) {
      onGetWeather();
    }
  }
  return (
    <>
      <input
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        onChange={(e) => onCityChange(e.target.value)}
        value={value}
      />
      <Button onClick={() => onGetWeather()}>Get Weather</Button>
      {weather && (
        <Button onClick={() => onModeChange("forecast")}>Get Forecast</Button>
      )}
      <span onClick={() => dispatch(unitF())}>F</span>
      <span onClick={() => dispatch(unitC())}>°C</span>
    </>
  );
};

export default Search;
