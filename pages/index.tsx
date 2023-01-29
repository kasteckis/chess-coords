import Head from "next/head";
import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import ChessBoard from "@/components/board/ChessBoard";
import StartGameDialog from "@/components/board/dialogs/StartGameDialog";
import {
  getRandomChessCoordinate,
  StartGameFormValues,
  StartGameFormValuesDefault,
} from "@/utils/utils";
import GameOverDialog from "@/components/board/dialogs/GameOverDialog";
import {useTimer} from "react-timer-hook";

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
  const [gameSettings, setGameSettings] = useState<StartGameFormValues>(
    StartGameFormValuesDefault
  );

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    autoStart: false,
    expiryTimestamp: new Date(),
    onExpire: () => {
      handleGameOver();
    },
  });

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
        setDesiredCoordinate(getRandomChessCoordinate(coordinate));
      } else {
        handleGameOver();
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
    const now = new Date();
    now.setSeconds(now.getSeconds() + values.time);
    restart(now);

    setGameSettings(values);
    handleStartGameDialogClose();
    handleGameOverDialogClose();
    setGameStarted(true);
    setDesiredCoordinate(getRandomChessCoordinate());
  };

  const handleRestartGame = () => {
    handleResetGame();
    handleStartGame(gameSettings);
  };

  const handleGameOver = () => {
    pause();
    setGameOverDialog(true);
  }

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
            <h3 className="m-0">Time left: {minutes}:{seconds}s</h3>
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
