import React, { useState } from "react";

export default function VoffsetButton({ vOffSet, setVOffSet }) {
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
      setVOffSet(x);
      console.log(vOffSet);
    } else if (vOffSet < 0) {
      setVOffSet(0);
    } else if (vOffSet > 200) {
      setVOffSet(200);
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
        style={{ right: -vOffSet + 12.5 }}
      ></div>
    </div>
  );
}
