export function FiveFollowingDaysWeather({ data }) {
  console.log(data);
  return (
    <div
      className={`WeatherElement && ${
        (data.current.condition.text === "Sunny" && `SunnyDay`) ||
        (data.current.condition.text === "Cloudy" && `Cloudy`) ||
        (data.current.condition.text === "Clear" && `Clear`) ||
        (data.current.condition.text === "Fog" && `Fog`) ||
        (data.current.condition.text === "Light rain" && "LightRain") ||
        (data.current.condition.text === "Partly cloudy" && "PartlyCloudy") ||
        (data.current.condition.text === "Mist" && "Mist") ||
        (data.current.condition.text === "Overcast" && "OverCast")
      }`}
    >
      <div className="DescriptionBox">
        <p className="Description">
          Tomorrow: {data.forecast.forecastday[1].date}
        </p>
        <p className="Description">
          {data.forecast.forecastday[1].day.maxtemp_c} &#8451;
        </p>
        <p className="Description">
          {data.forecast.forecastday[1].day.condition.text}{" "}
          {(data.forecast.forecastday[1].day.condition.text === "Sunny" &&
            "☀️") ||
            (data.forecast.forecastday[1].day.condition.text === "Cloudy" &&
              `⛅️`) ||
            (data.forecast.forecastday[1].day.condition.text === "Clear" &&
              `🌙`) ||
            (data.forecast.forecastday[1].day.condition.text === "Fog" &&
              `🌫️`) ||
            (data.forecast.forecastday[1].day.condition.text === "Light rain" &&
              "🌧️") ||
            (data.forecast.forecastday[1].day.condition.text ===
              "Partly cloudy" &&
              "🌤️") ||
            (data.forecast.forecastday[1].day.condition.text === "Mist" &&
              "🌫️") ||
            (data.forecast.forecastday[1].day.condition.text === "Overcast" &&
              "☁️")}
        </p>
      </div>
      <div className="DescriptionBox">
        <p className="Description">
          The day after tomorrow: {data.forecast.forecastday[1].date}
        </p>
        <p className="Description">
          Max temp: {data.forecast.forecastday[2].day.maxtemp_c} &#8451;
        </p>
        <p className="Description">
          {data.forecast.forecastday[2].day.condition.text}
          {(data.forecast.forecastday[2].day.condition.text === "Sunny" &&
            "☀️") ||
            (data.forecast.forecastday[2].day.condition.text === "Cloudy" &&
              `⛅️`) ||
            (data.forecast.forecastday[2].day.condition.text === "Clear" &&
              `🌙`) ||
            (data.forecast.forecastday[2].day.condition.text === "Fog" &&
              `🌫️`) ||
            (data.forecast.forecastday[2].day.condition.text === "Light rain" &&
              "🌧️") ||
            (data.forecast.forecastday[2].day.condition.text ===
              "Partly cloudy" &&
              "🌤️") ||
            (data.forecast.forecastday[2].day.condition.text === "Mist" &&
              "🌫️") ||
            (data.forecast.forecastday[2].day.condition.text === "Overcast" &&
              "☁️")}
        </p>
      </div>

      {data.forecast.forecastday.map((d) => {
        console.log(d.date);
        <p>{d.date}</p>;
        <p>{d.day.maxtemp_c}</p>;
      })}
    </div>
  );
}
