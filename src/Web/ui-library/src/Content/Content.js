import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        width: "100%",
        height: "calc(100% - 50px)",
        overflow: "auto",
        scrollMarginRight: "10%"
    },
});

export default function Content({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
            <div style={{ padding: "0.001rem"}} />
        </div>
    );
}