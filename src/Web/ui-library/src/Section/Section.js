import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';

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

export default function Section({ id, index, children }) {
    const classes = useStyles();

    return (
        <Draggable draggableId={`b${id}`} index={index}>
            {(provided, snapshot) => (
                <div 
                    className={classes.root}
                    ref={provided.innerRef}  
                    {...provided.draggableProps}  
                    {...provided.dragHandleProps}
                >
                    {children}
                </div>
            )}
        </Draggable>
    );
}