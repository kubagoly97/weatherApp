import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { WeatherElement } from "./WeatherElement";
import { Button } from "./Button";

export function WeatherList({ data, setData }) {
  const [list, setList] = useState(function () {
    const storedValue = localStorage.getItem("list");
    return JSON.parse(storedValue);
  });

  const addWeatherToTheList = () => {
    if (
      list &&
      list.map((l) => l.data.location.name).includes(data.location.name)
    ) {
      return;
    } else {
      setList([...list, { data, id: uuidv4() }]);
    }
  };

  useEffect(
    function () {
      localStorage.setItem("list", JSON.stringify(list));
    },
    [list]
  );

  const fetchNewData = (id) => {
    list.map(async (w) => {
      if (id === w.id) {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${w.data.location.name}&aqi=no`
        );
        const resJSON = await res.json();
        console.log(resJSON);
      }
    });
  };

  const handleRefreshData = (newData) => {
    console.log(list, newData);
  };

  return (
    <>
      {" "}
      <Button
        func={addWeatherToTheList}
        text="+"
        className="Button"
        disabled={!data && true}
        style={{
          backgroundColor: "rgba(0, 123, 255, 0.674)",
          padding: "9px",
          border: "none",
          borderRadius: "3px",
          marginTop: "20px",
          color: "white",
        }}
      />
      <div className={`WeatherList `}>
        <ul>
          {list &&
            list.map((w, i) => (
              <WeatherElement
                key={i}
                index={i}
                id={w.id}
                data={w.data}
                setList={setList}
                list={list}
                handleRefreshData={handleRefreshData}
                fetchNewData={fetchNewData}
              />
            ))}
        </ul>
      </div>
    </>
  );
}
