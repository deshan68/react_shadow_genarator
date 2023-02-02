import React, { useState } from "react";

export default function BlurButton({ blur, setBlur }) {
  const [isPulling, setIsPulling] = useState(false);
  // let screenLog = document.getElementsByClassName("screen-log");
  // document.addEventListener("", logKey);

  function mouseDown(e) {
    setIsPulling(true);
  }
  function mouseDraw(e) {
    if (isPulling) {
      const x = e.pageX - e.currentTarget.offsetLeft;
      setBlur(x);
      console.log(blur);
    } else if (blur < 0) {
      setBlur(0);
    } else if (blur > 200) {
      setBlur(200);
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
        style={{ right: -blur + 12.5 }}
      ></div>
    </div>
  );
}
