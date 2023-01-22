import React from "react";

const squareSize = "100px";

const DarkSquare = () => {
  return (
    <div
      style={{
        width: squareSize,
        height: squareSize,
        backgroundColor: "#789952",
        display: "inline-block",
      }}
    ></div>
  );
};

export default DarkSquare;
