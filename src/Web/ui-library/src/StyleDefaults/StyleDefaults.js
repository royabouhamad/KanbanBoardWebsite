import React from "react";
import { makeStyles, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles({
  "@global": {
    "html, body": {
      height: "100%"
    }
  }
});

function StyleDefaults() {
  useStyles();

  return <CssBaseline />;
}

export default StyleDefaults;