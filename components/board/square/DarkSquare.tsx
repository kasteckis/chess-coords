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
      className={selected ? "div-selected-square" : "div-dark-square"}
      onClick={handleCoordinateClick(coordinate)}
    ></div>
  );
};

export default DarkSquare;
