import { Display } from "react-7-segment-display";
import React from "react";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import style from "../display/Digitaldisplay.module.css";

export default function DigitalDisplay() {
  const [value] = useState("853");
  if ("serial" in navigator) {
    console.log("Awesome, The serial port is supported.");
    // The Web Serial API is supported.
  }
  // const handlePlus = () => {
  //   setValue((parseInt(value) + 1).toString());
  // };
  // const handleMinus = async () => {
  //   setValue((parseInt(value) - 1).toString());
  // };
  return (
    <Paper
      sx={{
        p: 0,
        display: "flex",
        flexDirection: "row",
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
