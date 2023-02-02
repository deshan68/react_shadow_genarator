import React, { useState } from "react";
import BlurButton from "./BlurButton";
import DrawerButton from "./DrawerButton";
import SpreadButton from "./SpreadButton";
import VoffsetButton from "./VoffsetButton";

export default function BoxScreen() {
  const color = "gray";
  const [mousePoint, setMousePoint] = useState(0);
  const [vOffSet, setVOffSet] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);

  return (
    <>
      <button
        type="button"
        style={{
          all: "unset",
          backgroundColor: "black",
          margin: "10px",
          padding: "8px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          setBlur(0);
          setMousePoint(0);
          setVOffSet(0);
          setSpread(0);
        }}
      >
        Reset
      </button>
      <button
        type="button"
        style={{
          all: "unset",
          backgroundColor: "green",
          margin: "10px",
          padding: "8px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          setBlur(0);
          setMousePoint(0);
          setVOffSet(0);
          setSpread(0);
        }}
      >
        Copy CSS values
      </button>
      <div
        className="screen-log"
        style={{
          boxShadow: `${mousePoint}px ${vOffSet}px ${blur}px ${spread}px ${color}`,
        }}
      >
        <p>H-Offset : {mousePoint} </p>
        <DrawerButton mousePoint={mousePoint} setMousePoint={setMousePoint} />
        <p>V-Offset : {vOffSet}</p>
        <VoffsetButton vOffSet={vOffSet} setVOffSet={setVOffSet} />
        <p>Blur : {blur}</p>
        <BlurButton blur={blur} setBlur={setBlur} />
        <p>Spread : {spread}</p>
        <SpreadButton spread={spread} setSpread={setSpread} />
      </div>
    </>
  );
}
