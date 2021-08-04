import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    }
});

export default function Root({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    );
}