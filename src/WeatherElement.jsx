import { useState } from "react";
export function WeatherElement({ index, data, setList, list, id }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      onClick={() => setShowMore(!showMore)}
      key={index}
      className={`WeatherElement ${
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
      <button
        style={{
          backgroundColor: "rgba(255, 0, 0, 0.382)",
          padding: "9px",
          border: "none",
          display: "inline-block",
          float: "right",
          borderTopLeftRadius: "3px",
          borderBottomLeftRadius: "3px",
        }}
        className="Button"
        onClick={() => {
          setList(list.filter((l) => l.id !== id));
        }}
      >
        ❌
      </button>
      <div className="WhiteBox">
        <p className="City WeatherElementTitle">
          {" "}
          {data.location.name} {data.current.temp_c} &#8451;{" "}
          {/* <img src={data.current.condition.icon} alt="" /> */}
          {(data.current.condition.text === "Sunny" && "☀️") ||
            (data.current.condition.text === "Cloudy" && `⛅️`) ||
            (data.current.condition.text === "Clear" && `🌙`) ||
            (data.current.condition.text === "Fog" && `🌫️`) ||
            (data.current.condition.text === "Light rain" && "🌧️") ||
            (data.current.condition.text === "Partly cloudy" && "🌤️") ||
            (data.current.condition.text === "Mist" && "🌫️") ||
            (data.current.condition.text === "Overcast" && "☁️")}
        </p>
      </div>
      {showMore && (
        <div className="DescriptionBox">
          <p className="Description">🌬️ Wind: {data.current.wind_kph} km/h</p>
          <p className="Description">💦 Humidity: {data.current.humidity} %</p>
          <p className="Description">
            ✕ Pressure: {data.current.pressure_mb} mb
          </p>
        </div>
      )}
    </div>
  );
}
