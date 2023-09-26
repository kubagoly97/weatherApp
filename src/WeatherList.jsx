import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { WeatherElement } from "./WeatherElement";
import { Button } from "./Button";
import axios from "axios";

export function WeatherList({ data, setData }) {
  const [list, setList] = useState(function () {
    const storedValue = localStorage.getItem("list");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const addWeatherToTheList = () => {
    if (list?.map((l) => l.data.location.name).includes(data.location.name)) {
      return;
    } else {
      setList((currList) => [...currList, { data, id: uuidv4() }]);
    }
  };

  useEffect(
    function () {
      localStorage.setItem("list", JSON.stringify(list));
    },
    [list]
  );

  // async function fetchNewData(id) {
  //   async function newDataFetch(id) {
  //     list.map(async (w) => {
  //       if (id === w.id) {
  //         const resJSON = await axios.get(
  //           `http://api.weatherapi.com/v1/forecast.json?key=${
  //             import.meta.env.VITE_API_KEY
  //           }&q=${w.data.location.name}&days=5&aqi=no&alerts=no`
  //         );
  //         const newData = resJSON.data;
  //         console.log(newData);
  //         return newData;
  //       }
  //     });
  //   }
  //   newDataFetch(id);
  // }

  // const handleRefreshData = (newData) => {
  //   list.map((w) => {
  //     console.log(w, newData);
  //   });
  // };

  return (
    <>
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
          {list.map((w, i) => (
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
