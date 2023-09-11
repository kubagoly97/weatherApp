import { useState } from "react";
import { Form } from "./Form";
import { Button } from "./Button";
export function Component({ data, setData }) {
  const [celc, setCels] = useState(true);
  const condition =
    (data && data.current.condition.text === "Sunny" && "SunnyDay") ||
    (data && data.current.condition.text === "Cloudy" && "Cloudy") ||
    (data && data.current.condition.text === "Light rain" && "LightRain") ||
    (data && data.current.condition.text === "Fog" && "Fog") ||
    (data && data.current.condition.text === "Overcast" && "OverCast") ||
    (data && data.current.condition.text === "Mist" && "Mist") ||
    (data &&
      data.current.condition.text === "Partly cloudy" &&
      "PartlyCloudy") ||
    (data && data.current.condition.text === "Clear" && "Clear");

  return (
    <div className={`Component  ${condition}`}>
      {data && (
        <Button
          text={celc ? "°F" : "°C"}
          func={() => setCels(!celc)}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.248)",
            padding: "9px",
            border: "none",
            display: "inline-block",
            float: "left",
            borderTopRightRadius: "3px",
            borderBottomRightRadius: "3px",
          }}
        />
      )}
      {data && (
        <div>
          <p
            className="City"
            style={{
              fontSize: "50px",
            }}
          >
            {data.location.name}{" "}
            {celc ? data.current.temp_c : data.current.temp_f}
            {celc ? "°C" : "°F"}{" "}
            {(data.current.condition.text === "Sunny" && "☀️") ||
              (data.current.condition.text === "Cloudy" && `⛅️`) ||
              (data.current.condition.text === "Clear" && `🌙`) ||
              (data.current.condition.text === "Fog" && `🌫️`) ||
              (data.current.condition.text === "Light rain" && "🌧️") ||
              (data.current.condition.text === "Partly cloudy" && "🌤️") ||
              (data.current.condition.text === "Overcast" && "☁️")}
          </p>
        </div>
      )}
      {data && (
        <div>
          <p style={{ color: "white" }}>{data.location.localtime.slice(10)}</p>
          <p>{data.current.condition.text}</p>
        </div>
      )}{" "}
      <Form data={data} setData={setData} />
    </div>
  );
}
