import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";

interface Props {
  open: boolean;
  handleClose: () => void;
  restartGame: () => void;
  streak: number;
}

const GameOverDialog = ({ open, restartGame, handleClose, streak }: Props) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: async () => {
      restartGame();
    },
  });

  return (
    <Dialog open={open}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Game Over</DialogTitle>
        <DialogContent>
          <span>Your streak was: {streak}</span>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back to main page</Button>
          <Button type="submit">Restart</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default GameOverDialog;
