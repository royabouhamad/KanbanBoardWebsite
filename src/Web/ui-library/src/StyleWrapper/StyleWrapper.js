import React from "react";
import { makeStyles, createTheme, ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles({
  styleWrapper: {
    height: "100%",
    "&, & *": {
      // boxSizing: "border-box",
      fontFamily: "'Lato', sans-serif",
    },
  },
});

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

function StyleWrapper({ children }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.styleWrapper}>{children}</div>
    </ThemeProvider>
  );
}

export default StyleWrapper;
