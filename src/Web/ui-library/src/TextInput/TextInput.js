import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontFamily: "Open sans",
    boxSizing: "border-box",
    border: `1px solid ${theme.palette.primary[200]}`,
    background: "#FFFFFF",
    height: 32,
    borderRadius: 2,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 280,
  },
  multilineWrapper: {
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
  prefix: {
    lineHeight: "32px",
    height: 32,
    fontSize: 14,
    color: "#999",
    display: "inline-block",
    paddingLeft: "8px",
    width: "initial",
    overflow: "hidden",
  },
  suffix: {
    lineHeight: "32px",
    height: 32,
    fontSize: 14,
    color: "#999",
    display: "inline-block",
    paddingRight: "8px",
    width: "initial",
    overflow: "hidden",
  },
  root: {
    padding: "0px 8px",
    fontSize: 14,
    height: 32,
    flexGrow: 1,
  },
}));

function TextInput(
  {
    value,
    onChange,
    prefix,
    suffix,
    disabled,
    wrapperRef,
    multiline,
    accept,
    width,
    format = (x) => x,
    ...rest
  },
  ref
) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.wrapper, {
        [classes.multilineWrapper]: multiline,
      })}
      ref={wrapperRef}
      style={width ? { width } : {}}
    >
      {prefix && <div className={classes.prefix}>{prefix}</div>}
      <InputBase
        value={value}
        onChange={onChange}
        classes={{ root: classes.root }}
        disabled={disabled}
        ref={ref}
        multiline={multiline}
        {...rest}
      />
      {suffix && <div className={classes.suffix}>{suffix}</div>}
    </div>
  );
}

export default React.forwardRef(TextInput);