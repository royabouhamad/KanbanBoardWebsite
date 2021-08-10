import React from "react";
import clsx from "clsx";
import MuiButton from "@material-ui/core/ButtonBase";
import { Text } from "../index";
import { makeStyles } from "@material-ui/core";

import Spinner from "../Spinner";

const useStyles = makeStyles((theme) => ({
  //default
  button: {
    boxSizing: "border-box", //keep this
    borderRadius: 5,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 16px", //medium
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: "19px",
    position: "relative",
  },
  //variants
  contained: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
  outlined: {
    color: theme.palette.primary.main,
    padding: "5px 15px", //medium but smaller to handle the border size
    border: `1px solid ${theme.palette.primary.border}`,
    background: theme.palette.background.default,
    "&:hover": {
      background: theme.palette.primary.background,
    },
  },
  delete: {
    background: theme.palette.error.main,
    color: theme.palette.primary.contrastText,
  },

  //size
  large: { padding: "8px 22px" },
  small: { padding: "4px 10px", fontSize: "13px" },
  //to handle the extra size from the border
  largeOutlined: { padding: "7px 21px" },
  smallOutlined: { padding: "3px 9px", fontSize: "13px" },

  //disabled
  containedDisabled: {
    background: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
  },
  outlinedDisabled: {
    border: `1px solid ${theme.palette.background.disabled}`,
    color: theme.palette.action.disabled,
  },

  //spinner
  spinner: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "inherit",
  },

  Icon: {
    "& > *:first-child": {
      width: "19px",
      height: "19px",
    },
  },
}));

function Button({
  children,
  variant = "contained",
  disabled,
  large,
  small,
  startIcon,
  endIcon,
  loading,
  ...rest
}) {
  const classes = useStyles();
  return (
    <MuiButton
      disabled={disabled || loading}
      className={clsx(classes.button, classes[variant], {
        [classes.containedDisabled]: variant === "contained" && disabled,
        [classes.outlinedDisabled]: variant === "outlined" && disabled,
        [classes.largeOutlined]: variant === "outlined" && large,
        [classes.smallOutlined]: variant === "outlined" && small,
        [classes.large]: large,
        [classes.small]: small,
      })}
      {...rest}
    >
      {startIcon && (
        <div className={classes.Icon} style={{ paddingRight: "5px" }}>
          {startIcon}
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexGrow: "1",
        }}
      >
        <Text>{children}</Text>
      </div>
      {endIcon && (
        <div className={classes.Icon} style={{ paddingLeft: "5px" }}>
          {endIcon}
        </div>
      )}
      {loading && (
        <div
          className={clsx(classes.spinner, {
            [classes.outlinedSpinner]: variant === "outlined",
          })}
        >
          <Spinner
            size="small"
            color={variant === "contained" ? "secondary" : "primary"}
          />
        </div>
      )}
    </MuiButton>
  );
}

export default Button;
