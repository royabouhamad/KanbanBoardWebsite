import React from "react";
import { makeStyles, Dialog as MuiDialog } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  dialogPaper: {
    width: 474,
    border: "1px solid #E3E9EF",
    width: "auto",
    height: "auto",
    borderRadius: 10,
    padding: "20px",
    borderStyle: "none",
  },
});

function FormDialog({ open, onClose, children, width, minWidth }) {
  const classes = useStyles();

  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.dialogPaper,
      }}
      PaperProps={{
        style: { width, minWidth },
      }}
      maxWidth={false}
    >
      {children}
    </MuiDialog>
  );
}

export default FormDialog;