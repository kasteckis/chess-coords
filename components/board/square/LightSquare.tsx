import React from "react";

const squareSize = "100px";

const LightSquare = () => {
  return (
    <div
      style={{
        width: squareSize,
        height: squareSize,
        backgroundColor: "#ededd1",
        display: 'inline-block',
      }}
    ></div>
  );
};

export default LightSquare;