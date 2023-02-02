import React, { useEffect, useState } from "react";
import BlurButton from "./BlurButton";
import DrawerButton from "./DrawerButton";
import SpreadButton from "./SpreadButton";
import VoffsetButton from "./VoffsetButton";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function BoxScreen() {
  const color = "gray";
  const [mousePoint, setMousePoint] = useState(0);
  const [vOffSet, setVOffSet] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);
  const [cssVal, setCssVal] = useState("");
  const [copied, setCopied] = useState(false);

  let copyText = document.getElementsByClassName("cssVal");
  console.log(copyText.value);
  // copyText.select();
  // navigator.clipboard.writeText(copyText.value);
  useEffect(() => {
    setCssVal(
      `boxShadow: ${mousePoint}px ${vOffSet}px ${blur}px ${spread}px ${color};`
    );
  });

  // const copyToClipBoardHandler = () => {
  //   console.log(cssVal);
  // };

  const copyToClipBoardHandler = () => {
    setCopied(true);
  };

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
      <CopyToClipboard onCopy={copyToClipBoardHandler} text={cssVal}>
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
        >
          Copy CSS values
        </button>
      </CopyToClipboard>
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
      <div className="cssVal">
        boxShadow: {mousePoint}px {vOffSet}px {blur}px {spread}px {color};
      </div>
      {copied ? <p style={{ color: "red" }}>Copied!</p> : null}
    </>
  );
}
