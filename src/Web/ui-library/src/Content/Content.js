import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import { makeStyles } from '@material-ui/core/styles';
import { Icons } from "@kanban/ui-library";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        width: "100%",
        height: "calc(100% - 50px)",
        overflowX: "auto",
        overflowY: "hidden"
    },
});

export default function Content({ id, addFunction, children }) {
    const classes = useStyles();

    return (
        <Droppable droppableId={id} direction="horizontal" type="section">
            {(provided, snapshot) => (
                <div className={classes.root} ref={provided.innerRef} {...provided.droppableProps}>
                    {children}
                    {provided.placeholder}
                    <div
                        style={{
                            display: "flex",
                            height: "100%",
                            alignItems: "center"
                        }}
                    >
                        <Icons.PlusIcon style={{ cursor: "pointer" }} onClick={addFunction} />
                    </div>
                </div>
            )}
        </Droppable>
    );
}