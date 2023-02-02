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
    <div
      className="screen-log"
      style={{
        boxShadow: `${mousePoint}px ${vOffSet}px ${blur}px ${spread}px ${color}`,
      }}
    >
      <p>H-Offset</p>
      <DrawerButton mousePoint={mousePoint} setMousePoint={setMousePoint} />
      <p>V-Offset</p>
      <VoffsetButton vOffSet={vOffSet} setVOffSet={setVOffSet} />
      <p>Blur</p>
      <BlurButton blur={blur} setBlur={setBlur} />
      <p>Spread</p>
      <SpreadButton spread={spread} setSpread={setSpread} />
    </div>
  );
}
