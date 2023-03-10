import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select, TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  GameTypeEnum,
  StartGameFormValues,
  StartGameFormValuesDefault,
} from "@/utils/utils";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleStartGame: (values: StartGameFormValues) => void;
}

const StartGameDialog = ({ open, handleClose, handleStartGame }: Props) => {
  const validationSchema = yup.object({
    gameType: yup
      .mixed<GameTypeEnum>()
      .oneOf(Object.values(GameTypeEnum))
      .required(),
  });

  const formik = useFormik({
    initialValues: StartGameFormValuesDefault,
    validationSchema: validationSchema,
    onSubmit: async (values: StartGameFormValues) => {
      handleStartGame(values);
    },
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Start Game</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 0.5 }}>
            <InputLabel>You play as</InputLabel>
            <Select
              disabled={true} // TODO: Once you can play as black, delete this
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
            <TextField
                fullWidth
                id="time"
                name="time"
                label="Time in seconds"
                variant="standard"
                type="number"
                value={formik.values.time}
                onChange={formik.handleChange}
                error={formik.touched.time && Boolean(formik.errors.time)}
                helperText={formik.touched.time && formik.errors.time}
            />
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
