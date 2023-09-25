import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function WeatherHoursCarousel({ data }) {
  const time = Number(new Date().toString().slice(16, 18));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="Hours"
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 442 },
        backgroundColor: "rgba(255, 255, 255, 0.44)",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {data.forecast.forecastday[0].hour.slice(time).map((h, i) => (
          <Tab
            label={
              <>
                <p
                  style={{ margin: "none", fontSize: "35px", padding: "none" }}
                >
                  {(h.condition.text === "Sunny" && "☀️") ||
                    (h.condition.text === "Cloudy" && `⛅️`) ||
                    (h.condition.text === "Clear" && `🌙`) ||
                    (h.condition.text === "Fog" && `🌫️`) ||
                    (h.condition.text === "Light rain" && "🌧️") ||
                    (h.condition.text === "Partly cloudy" && "🌤️") ||
                    (h.condition.text === "Mist" && "🌫️") ||
                    (h.condition.text === "Overcast" && "☁️")}{" "}
                  {h.temp_c} &#8451;
                </p>
                <p
                  style={{ margin: "none", padding: "none", fontSize: "20px" }}
                >
                  {Number(h.time.slice(10, 13)) === time
                    ? "Now"
                    : `${h.time.slice(10, 13)}:00`}
                </p>
              </>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
}
