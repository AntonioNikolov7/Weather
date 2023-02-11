export const convertCelsiusToFahrenheit = (temp) => {
  // Example: (50°F - 32) x .5556 = 10°C
  return temp * 1.8 + 32;
};

export const convertFahrenheitToCelsius = (temp) => {
  // Example: (50°F - 32) x .5556 = 10°C
  return (temp - 32) * 0.5556;
};

export const convertSecondsTimestampToDateString = (secondsSinceEpoch) => {
  return new Date(secondsSinceEpoch * 1000);
};
