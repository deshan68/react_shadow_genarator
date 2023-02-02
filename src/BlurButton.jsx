import React, { useState } from "react";

export default function BlurButton({ blur, setBlur }) {
  const [isPulling, setIsPulling] = useState(false);

  function mouseDown(e) {
    setIsPulling(true);
  }
  function mouseDraw(e) {
    if (isPulling) {
      const x = e.pageX - e.currentTarget.offsetLeft;
      setBlur(x);
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
