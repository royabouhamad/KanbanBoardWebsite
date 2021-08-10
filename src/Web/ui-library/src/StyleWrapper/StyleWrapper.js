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
    palette: {
        background: {
            default: "#FFFFFF",
            disabled: "rgba(0, 0, 0, 0.12)",
        },
        action: {
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
        },
        primary: {
            main: "#2895FA",
            dark: "#1C68AF",
            light: "#53AAFB",
            background: "rgba(40, 149, 250, 0.08)",
            border: "rgba(40, 149, 250, 0.5)",
            contrastText: "#FFFFFF",
            
            100: "#F9FCFC", // input backgrounds
            200: "#E3E9EF", // input borders
            300: "#FAFAFA", // table heading  backgrounds
            400: "#E8F4F5", // form heading backgrounds
        },
        error: {
            main: "#F44336",
            dark: "#E31B0C",
            light: "#F88078",
            lightBg:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F44336",
        },
    },    
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
