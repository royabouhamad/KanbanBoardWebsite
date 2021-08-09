import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Droppable } from "react-beautiful-dnd";
import { Icons } from "@kanban/ui-library";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        overflow: "auto",
        minHeight: 'calc(100% - 50px)',
        maxHeight: 'calc(100% - 40px)'
    }
});

export default function SectionBody({ id, children, addFunction }) {
    const classes = useStyles();

    return (
        <Droppable droppableId={id}>
            {(provided, snapshot) => (
                <div className={classes.root} ref={provided.innerRef} {...provided.droppableProps}>
                    {children}
                    {provided.placeholder}
                    {addFunction ? 
                        <div 
                            style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "center"
                            }}
                        >
                            <Icons.PlusIcon onClick={addFunction} />
                        </div>
                    :
                        <></>
                    }
                </div>
            )}
        </Droppable>
    );
}