import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles({
    root: {
        flexDirection: "column",
        padding: "10px",
        marginBottom: "5px",
        border: "1px solid #000000",
        borderRadius: "5px",
        boxShadow: "2px 4px #B3B3B3"
    },
});

export default function Ticket({ id, index, children, backgroundColor, ...rest }) {
    const classes = useStyles();

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}  
                    {...provided.draggableProps}  
                    {...provided.dragHandleProps}
                >
                    <div 
                        className={classes.root} 
                        style={{ backgroundColor }}
                        {...rest}
                    >
                        {children}
                    </div>
                </div>
            )}
        </Draggable>
    );
}