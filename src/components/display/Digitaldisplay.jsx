import { Display } from "react-7-segment-display";
import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import style from "../display/Digitaldisplay.module.css";

export default function DigitalDisplay({ value, setValue }) {
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber =
        Math.floor(Math.random() * (50000 - 20000 + 1)) + 20000;
      setValue(randomNumber);
    }, 5000);
    return () => clearInterval(interval);
  }, [setValue]);

  if ("serial" in navigator) {
    console.log("Awesome, The serial port is supported.");
    // The Web Serial API is supported.
  }
  return (
    <Paper
      sx={{
        p: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        border: "10px solid red",
        backgroundColor: "black",
        color: "#E95725",
      }}
    >
      <Display backgroundColor="black" height="60" count="5" value={value} />
      <div className={style.red}>Kg</div>
    </Paper>
  );
}
