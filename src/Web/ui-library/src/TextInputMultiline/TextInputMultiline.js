import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontFamily: "Open sans",
    boxSizing: "border-box",
    border: `1px solid ${theme.palette.primary[200]}`,
    background: "#FFFFFF",
    minHeight: 32,
    borderRadius: 2,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 280,
  },
  root: {
    fontSize: 14,
    flexGrow: 1,
    padding: 0,
  },
  input: {
    padding: "6px 8px",
  },
}));

function TextInputMultiline({
  value,
  onChange,
  disabled,
  width,
  rows = 4,
  ...rest
}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} style={width ? { width } : {}}>
      <InputBase
        value={value}
        onChange={onChange}
        classes={{ root: classes.root, input: classes.input }}
        disabled={disabled}
        multiline
        rows={rows}
        {...rest}
      />
    </div>
  );
}

export default TextInputMultiline;