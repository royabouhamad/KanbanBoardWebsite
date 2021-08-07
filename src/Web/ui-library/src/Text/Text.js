import React from "react";
import clsx from "clsx";
import MakeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = MakeStyles((theme) => ({
  main: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontSize: "16px",
    margin: 0,
    padding: 0,
    wordBreak: "break-word",
  },

  //weights
  bold: {
    fontWeight: 700,
  },

  //sizes
  small: {
    fontSize: "12px",
  },
  normalHeader: {
    fontSize: "20px",
  },
  mediumHeader: {
    fontSize: "24px",
  },
  largeHeader: {
    fontSize: "32px",
  },

  //colours
  grey: {
    color: theme.palette.text.secondary,
  },
  red: {
    color: theme.palette.error.main,
  },
  green: {
    color: theme.palette.success.main,
  },
}));

function Text({
  children,
  small,
  normalHeader,
  mediumHeader,
  largeHeader,
  bold,
  grey,
  red,
  green,
  ...rest
}) {
  const classes = useStyles();

  return (
    <p
      className={clsx(classes.main, {
        [classes.small]: small,
        [classes.normalHeader]: normalHeader,
        [classes.mediumHeader]: mediumHeader,
        [classes.largeHeader]: largeHeader,
        [classes.bold]: bold,
        [classes.grey]: grey,
        [classes.red]: red,
        [classes.green]: green,
      })}
      {...rest}
    >
      {children}
    </p>
  );
}

export default Text;
