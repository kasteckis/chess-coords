import React from "react";

const squareSize = "100px";

interface Props {
    coordinate: string;
    selected: boolean;
    handleCoordinateClick: (coordinate: string) => () => void;
}

const DarkSquare = ({ coordinate, selected, handleCoordinateClick }: Props) => {
  return (
    <div
      style={{
        width: squareSize,
        height: squareSize,
        backgroundColor: selected ? "#ea7e6a" : "#789952",
        display: "inline-block",
      }}
      onClick={handleCoordinateClick(coordinate)}
    ></div>
  );
};

export default DarkSquare;
