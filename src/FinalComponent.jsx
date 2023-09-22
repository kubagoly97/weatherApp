import { Component } from "./Component";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error";
import { useState } from "react";
import { WeatherList } from "./WeatherList";

export default function FinalComponent() {
  const [data, setData] = useState("");
  return (
    <>
      <ErrorBoundary
        fallback={
          <>
            <Component data={data} setData={setData} />
            <WeatherList data={data} setData={setData} />
            <Error />
          </>
        }
      >
        <Component data={data} setData={setData} />
        <WeatherList data={data} />
      </ErrorBoundary>
    </>
  );
}
