import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

export default function DragDrop({ children, ...rest }) {
    return (
        <DragDropContext {...rest}>
            {children}
        </DragDropContext>
    );
}