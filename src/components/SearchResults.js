import React from "react";

export default function SearchResults({ forecasts }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {forecasts.map(function (forecast, i) {
          return (
            <li key={i}>
              <span>{forecast.date}</span>
              <span> </span>
              <span>{forecast.day.maxtemp_c}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
