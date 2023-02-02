import React, { useState } from "react";

export default function SpreadButton({ spread, setSpread }) {
  const [isPulling, setIsPulling] = useState(false);
  // let screenLog = document.getElementsByClassName("screen-log");
  // document.addEventListener("", logKey);

  function mouseDown(e) {
    setIsPulling(true);
  }
  function mouseDraw(e) {
    if (isPulling) {
      const x = e.pageX - e.currentTarget.offsetLeft;

      // let text = x - 1325;
      setSpread(x);
      console.log(spread);
    } else if (spread < 0) {
      setSpread(0);
    } else if (spread > 200) {
      setSpread(200);
    }
  }
  function mouseUp(e) {
    setIsPulling(false);
  }

  return (
    <div onMouseMoveCapture={mouseDraw} className="bar">
      <div
        className="circle"
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        style={{ right: -spread + 12.5 }}
      ></div>
    </div>
  );
}
