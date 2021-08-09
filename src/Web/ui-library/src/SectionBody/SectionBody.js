import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        overflow: "auto",
        height: 'calc(100% - 40px)'
    }
});

export default function SectionBody({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>{children}</div>
    );
}