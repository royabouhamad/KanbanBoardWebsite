import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexDirection: "column",
        padding: "10px",
        marginBottom: "5px",
        border: "1px solid #000000",
        borderRadius: "5px",
    },
});

export default function Ticket({ children, backgroundColor }) {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ backgroundColor }}>
            {children}
        </div>
    );
}