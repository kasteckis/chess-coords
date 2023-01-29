import Head from "next/head";
import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import ChessBoard from "@/components/board/ChessBoard";
import StartGameDialog from "@/components/board/dialogs/StartGameDialog";
import { chessCoordinates, StartGameFormValues } from "@/utils/utils";

export default function Home() {
  const [startGameDialogOpen, setStartGameDialogOpen] =
    useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [desiredCoordinate, setDesiredCoordinate] = useState<
    string | undefined
  >(undefined);
  const [selectedCoordinate, setSelectedCoordinate] = useState<
    string | undefined
  >(undefined);

  const handleStartGameDialogClose = () => {
    setStartGameDialogOpen(false);
  };

  const handleStartGameDialogOpen = () => {
    setStartGameDialogOpen(true);
  };

  const handleCoordinateClick = (coordinate: string) => () => {
    if (gameStarted) {
      setSelectedCoordinate(coordinate);

      if (coordinate === desiredCoordinate) {
        // Todo add some logic, like some kind of streak counter
        setDesiredCoordinate(
          chessCoordinates[Math.floor(Math.random() * chessCoordinates.length)]
        );
      } else {
        handleResetGame();
      }
    }
  };

  const handleResetGame = () => {
    setGameStarted(false);
    setDesiredCoordinate(undefined);
    setSelectedCoordinate(undefined);
  };

  const handleStartGame = (values: StartGameFormValues) => {
    console.log(values); // todo implement this logic
    handleStartGameDialogClose();
    setGameStarted(true);
    setDesiredCoordinate(
      chessCoordinates[Math.floor(Math.random() * chessCoordinates.length)]
    );
  };

  return (
    <>
      <Head>
        <title>Chess learn coordinates</title>
        <meta
          name="description"
          content="Chess learn coordinates by practicing using this tool!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        {gameStarted ? (
          <>
            <h1>{desiredCoordinate}</h1>
          </>
        ) : (
          <>
            <h1>Learn chess coordinates by practicing it!</h1>
            <Button
              variant="outlined"
              className="button-center"
              onClick={handleStartGameDialogOpen}
            >
              Start!
            </Button>
          </>
        )}
        <ChessBoard
          selectedCoordinate={selectedCoordinate}
          handleCoordinateClick={handleCoordinateClick}
        />
      </Container>
      <StartGameDialog
        open={startGameDialogOpen}
        handleClose={handleStartGameDialogClose}
        handleStartGame={handleStartGame}
      />
    </>
  );
}
