import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  wrapper: {
    display: "inline-flex",
    alignItems: "flex-start",
  },
  label: {
    minHeight: 32,
    display: "flex",
    alignItems: "center",
    paddingRight: "8px",
    fontSize: 12,
    width: 160,
    flexShrink: 0,
  },
  small: {
    minHeight: "initial",
  },
  content: {
    display: "flex",
    alignItems: "center",
    minHeight: 32,
  },
  smallContent: {
    minHeight: "initial",
    fontSize: 12,
  },
});

function Label({ label, children, small, ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div
        className={clsx(classes.label, { [classes.small]: small })}
        {...rest}
      >
        {label}
      </div>
      <div
        className={clsx(classes.content, {
          [classes.smallContent]: small,
        })}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Label;