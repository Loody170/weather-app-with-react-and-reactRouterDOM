import { useState } from "react";
import './SearchBox.css';
import SearchResults from "./SearchResults";

export default function SearchBox() {
  const [cityName, setCityName] = useState("");
  const [forecasts, setForecasts] = useState([]);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter' && cityName.trim().length > 2) {
      const URL = "https://api.weatherapi.com/v1/forecast.json?key=9ef48a889e534a80852221919231905&q=" + cityName + "&days=3&aqi=no&alerts=no";
      try {
        const response = await fetch(URL, { method: "GET", headers: { Accept: 'application/json' } });
        if (!response.ok) {
          throw new Error(`Error failed to send HTTP GET request: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log(data.forecast.forecastday);
        setForecasts(data.forecast.forecastday);
      }
      catch (err) {
        console.error(err);
      }
    }
  }

  function handleChange(event) {
    setCityName(event.target.value);
  }

  return (
    <div id="div">
      <input
        type="text"
        className="searchBox"
        placeholder="Enter city name"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <h3>Weather for {cityName}</h3>
      <SearchResults forecasts={forecasts} />
    </div>
  );
}
