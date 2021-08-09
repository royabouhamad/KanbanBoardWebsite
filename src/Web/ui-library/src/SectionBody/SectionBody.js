import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        overflow: "auto",
        height: 'calc(100% - 40px)'
    }
});

export default function SectionBody({ id, children }) {
    const classes = useStyles();

    return (
        <Droppable droppableId={id}>
            {(provided, snapshot) => (
                <div className={classes.root} ref={provided.innerRef} {...provided.droppableProps}>
                    {children}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}