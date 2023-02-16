# Weather App

This is a React-based web application that allows users to search for the current weather conditions in a particular location. It uses the OpenWeather API to retrieve real-time weather data.

## Usage

To use the app, follow these steps:

1. Clone the repository to your local machine using git clone https://github.com/AntonioNikolov7/Weather.git.

2. Navigate to the project directory using cd Weather.

3. Install the required dependencies using npm install.

4. Obtain an API key from OpenWeather and save it to a .env file in the root directory of the project. The file should contain the following:

```bash
REACT_APP_API_KEY=your_api_key_here
```

Replace your_api_key_here with your generated API key.

5. Start the development server:
   bash
   npm start

6. The app should now be running on http://localhost:3000.

## Features

- Users can enter a location and retrieve current weather conditions
- The app displays the current temperature, humidity, wind speed, and a weather icon
- The app also displays a five-day forecast for the selected location
