import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  panelRow: {
    minHeight: 38,
    padding: "5px 0px",
    wordBreak: "break-all",
  },
  multiline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4px",
  },
  noPadding: {
    padding: 0,
    overflowY: "auto",
  },
});

function PanelRow({ children, multiline, noPadding, onClick, style }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.panelRow, {
        [classes.multiline]: multiline,
        [classes.noPadding]: noPadding,
      })}
      onClick={onClick}
      style={onClick ? { cursor: "pointer", ...style } : style}
    >
      {children}
    </div>
  );
}

export default PanelRow;
