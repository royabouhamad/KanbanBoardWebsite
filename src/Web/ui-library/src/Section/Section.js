import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: (props) => ({
        minWidth: "25%",
        minHeight: "95%",
        width: props.boards ? `calc(100%/${props.boards})` : "100%",
        flexDirection: "column",
        margin: "5px",
        backgroundColor: "#D3D3D3",
        border: "1px solid #000000",
        borderRadius: "3px",
        overflow: "hidden"
    })
});

export default function Section({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>{children}</div>
    );
}