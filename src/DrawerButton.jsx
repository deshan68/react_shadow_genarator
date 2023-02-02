import React, { useState } from "react";

export default function DrawerButton({ mousePoint, setMousePoint }) {
  const [isPulling, setIsPulling] = useState(false);

  function mouseDown(e) {
    setIsPulling(true);
  }
  function mouseDraw(e) {
    if (isPulling) {
      const x = e.pageX - e.currentTarget.offsetLeft;
      setMousePoint(x);
    } else if (mousePoint < 0) {
      setMousePoint(0);
    } else if (mousePoint > 200) {
      setMousePoint(200);
    }
  }
  function mouseUp(e) {
    setIsPulling(false);
  }

  return (
    <div onMouseMoveCapture={mouseDraw} onMouseUp={mouseUp} className="bar">
      <div
        className="circle"
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        style={{ right: -mousePoint + 12.5 }}
      ></div>
    </div>
  );
}
