import { Component } from "./Component";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error";
import { useState } from "react";
import { WeatherList } from "./WeatherList";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Toolbar } from "@mui/material";

export default function FinalComponent() {
  const [data, setData] = useState("");
  return (
    <>
      <ErrorBoundary
        fallback={
          <>
            <Component data={data} setData={setData} />
            <WeatherList data={data} />
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
