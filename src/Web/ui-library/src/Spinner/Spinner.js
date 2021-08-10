import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  spinner: {
    width: 12
  }
});

function Spinner({ color, size }) {
  const classes = useStyles();

  return (
    <CircularProgress className={classes.spinner} color={color} size={size} />
  );
}

export default Spinner;