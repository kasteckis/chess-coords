import React from "react";
import { Box } from "@mui/material";
import DarkSquare from "@/components/board/square/DarkSquare";
import LightSquare from "@/components/board/square/LightSquare";

interface Props {
  selectedCoordinate?: string;
  handleCoordinateClick: (coordinate: string) => () => void;
}

const ChessBoard = ({ selectedCoordinate, handleCoordinateClick }: Props) => {
  return (
    <>
      <Box>
        <Box className="box-flex-center">
          <LightSquare
            selected={selectedCoordinate === "A8"}
            coordinate={"A8"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "B8"}
            coordinate={"B8"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "C8"}
            coordinate={"C8"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "D8"}
            coordinate={"D8"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "E8"}
            coordinate={"E8"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "F8"}
            coordinate={"F8"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "G8"}
            coordinate={"G8"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "H8"}
            coordinate={"H8"}
            handleCoordinateClick={handleCoordinateClick}
          />
        </Box>
        <Box className="box-flex-center">
          <DarkSquare
            selected={selectedCoordinate === "A7"}
            coordinate={"A7"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "B7"}
            coordinate={"B7"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "C7"}
            coordinate={"C7"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "D7"}
            coordinate={"D7"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "E7"}
            coordinate={"E7"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "F7"}
            coordinate={"F7"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "G7"}
            coordinate={"G7"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "H7"}
            coordinate={"H7"}
            handleCoordinateClick={handleCoordinateClick}
          />
        </Box>
        <Box className="box-flex-center">
          <LightSquare
            selected={selectedCoordinate === "A6"}
            coordinate={"A6"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "B6"}
            coordinate={"B6"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "C6"}
            coordinate={"C6"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "D6"}
            coordinate={"D6"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "E6"}
            coordinate={"E6"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "F6"}
            coordinate={"F6"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "G6"}
            coordinate={"G6"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "H6"}
            coordinate={"H6"}
            handleCoordinateClick={handleCoordinateClick}
          />
        </Box>
        <Box className="box-flex-center">
          <DarkSquare
            selected={selectedCoordinate === "A5"}
            coordinate={"A5"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "B5"}
            coordinate={"B5"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "C5"}
            coordinate={"C5"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "D5"}
            coordinate={"D5"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "E5"}
            coordinate={"E5"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "F5"}
            coordinate={"F5"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "G5"}
            coordinate={"G5"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "H5"}
            coordinate={"H5"}
            handleCoordinateClick={handleCoordinateClick}
          />
        </Box>
        <Box className="box-flex-center">
          <LightSquare
            selected={selectedCoordinate === "A4"}
            coordinate={"A4"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "B4"}
            coordinate={"B4"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "C4"}
            coordinate={"C4"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "D4"}
            coordinate={"D4"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "E4"}
            coordinate={"E4"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "F4"}
            coordinate={"F4"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "G4"}
            coordinate={"G4"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "H4"}
            coordinate={"H4"}
            handleCoordinateClick={handleCoordinateClick}
          />
        </Box>
        <Box className="box-flex-center">
          <DarkSquare
            selected={selectedCoordinate === "A3"}
            coordinate={"A3"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "B3"}
            coordinate={"B3"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "C3"}
            coordinate={"C3"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "D3"}
            coordinate={"D3"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "E3"}
            coordinate={"E3"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "F3"}
            coordinate={"F3"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "G3"}
            coordinate={"G3"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "H3"}
            coordinate={"H3"}
            handleCoordinateClick={handleCoordinateClick}
          />
        </Box>
        <Box className="box-flex-center">
          <LightSquare
            selected={selectedCoordinate === "A2"}
            coordinate={"A2"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "B2"}
            coordinate={"B2"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "C2"}
            coordinate={"C2"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "D2"}
            coordinate={"D2"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "E2"}
            coordinate={"E2"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "F2"}
            coordinate={"F2"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "G2"}
            coordinate={"G2"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "H2"}
            coordinate={"H2"}
            handleCoordinateClick={handleCoordinateClick}
          />
        </Box>
        <Box className="box-flex-center">
          <DarkSquare
            selected={selectedCoordinate === "A1"}
            coordinate={"A1"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "B1"}
            coordinate={"B1"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "C1"}
            coordinate={"C1"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "D1"}
            coordinate={"D1"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "E1"}
            coordinate={"E1"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "F1"}
            coordinate={"F1"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <DarkSquare
            selected={selectedCoordinate === "G1"}
            coordinate={"G1"}
            handleCoordinateClick={handleCoordinateClick}
          />
          <LightSquare
            selected={selectedCoordinate === "H1"}
            coordinate={"H1"}
            handleCoordinateClick={handleCoordinateClick}
          />
        </Box>
      </Box>
    </>
  );
};

export default ChessBoard;
