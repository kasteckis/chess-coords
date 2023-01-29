import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import {GameTypeEnum} from "@/utils/utils";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

const StartGameDialog = ({ open, handleClose, handleOpen }: Props) => {
  const validationSchema = yup.object({
    gameType: yup.mixed<GameTypeEnum>().oneOf(Object.values(GameTypeEnum))
        .required(),
  });

  const formik = useFormik({
    initialValues: {
      gameType: GameTypeEnum.White,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert('Todo start game');
    },
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Start Game</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{marginTop: '5px'}}>
            <InputLabel>You play as</InputLabel>
            <Select
                id="gameType"
                name="gameType"
                value={formik.values.gameType}
                label="You play as"
                onChange={formik.handleChange}
                variant="standard"
            >
              <MenuItem value={GameTypeEnum.White}>White</MenuItem>
              <MenuItem value={GameTypeEnum.Black}>Black</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Start Game</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default StartGameDialog;
