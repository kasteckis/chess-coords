import Head from "next/head";
import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import ChessBoard from "@/components/board/ChessBoard";
import StartGameDialog from "@/components/board/dialogs/StartGameDialog";
import {
  chessCoordinates,
  GameTypeEnum,
  StartGameFormValues,
} from "@/utils/utils";
import GameOverDialog from "@/components/board/dialogs/GameOverDialog";

export default function Home() {
  const [startGameDialogOpen, setStartGameDialogOpen] =
    useState<boolean>(false);
  const [gameOverDialog, setGameOverDialog] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [desiredCoordinate, setDesiredCoordinate] = useState<
    string | undefined
  >(undefined);
  const [selectedCoordinate, setSelectedCoordinate] = useState<
    string | undefined
  >(undefined);
  const [streak, setStreak] = useState<number>(0);

  const handleStartGameDialogClose = () => {
    setStartGameDialogOpen(false);
  };

  const handleStartGameDialogOpen = () => {
    setStartGameDialogOpen(true);
  };

  const handleGameOverDialogClose = () => {
    handleResetGame();
    setGameOverDialog(false);
  };

  const handleCoordinateClick = (coordinate: string) => () => {
    if (gameStarted) {
      setSelectedCoordinate(coordinate);

      if (coordinate === desiredCoordinate) {
        setStreak(streak + 1);
        setDesiredCoordinate(
          chessCoordinates[Math.floor(Math.random() * chessCoordinates.length)]
        );
      } else {
        setGameOverDialog(true);
      }
    }
  };

  const handleResetGame = () => {
    setGameStarted(false);
    setDesiredCoordinate(undefined);
    setSelectedCoordinate(undefined);
    setStreak(0);
  };

  const handleStartGame = (values: StartGameFormValues) => {
    console.log(values); // todo implement this logic
    handleStartGameDialogClose();
    handleGameOverDialogClose();
    setGameStarted(true);
    setDesiredCoordinate(
      chessCoordinates[Math.floor(Math.random() * chessCoordinates.length)]
    );
  };

  const handleRestartGame = () => {
    handleResetGame();
    handleStartGame({
      gameType: GameTypeEnum.White, // TODO: Veliau turbut is localStorage ar state kazkokio pasiimt reiksmes?
    });
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
            <h1 className="m-0">{desiredCoordinate}</h1>
            <h3 className="m-0">Streak: {streak}</h3>
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
      <GameOverDialog
        open={gameOverDialog}
        handleClose={handleGameOverDialogClose}
        restartGame={handleRestartGame}
        streak={streak}
      />
    </>
  );
}
