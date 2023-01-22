import React from "react";
import { Box } from "@mui/material";
import DarkSquare from "@/components/board/square/DarkSquare";
import LightSquare from "@/components/board/square/LightSquare";

const ChessBoard = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
          <DarkSquare />
          <LightSquare />
        </Box>
      </Box>
    </>
  );
};

export default ChessBoard;
