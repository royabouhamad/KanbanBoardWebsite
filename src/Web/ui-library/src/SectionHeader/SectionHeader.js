import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#808080",
        padding: "10px",
        borderBottom: "1px solid #000000",
        height: "40px",
        justifyContent: "space-between",
        alignItems: "center",
    }
});

export default function SectionHeader({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>{children}</div>
    );
}