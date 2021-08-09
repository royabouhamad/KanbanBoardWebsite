import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
    Content,
    DragDrop,
    Root,
    Section,
    SectionBody,
    SectionHeader,
    Text,
    Ticket
} from "@kanban/ui-library"; 
import { updateTicketSection, updateTicketPosition } from "../features/tickets/ticketsSlice";

export default function Home() {
    const boardSections = useSelector(state => state.boardSections.sections);
    const tickets = useSelector(state => state.tickets);
    const dispatch = useDispatch();

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        dispatch(updateTicketSection({ 
            id: result.draggableId,
            boardSectionId: result.destination.droppableId,
        }));
        dispatch(updateTicketPosition({
            id: result.draggableId,
            boardSectionId: result.destination.droppableId,
            originalBoardSectionId: result.source.droppableId,
            sectionPosition: result.destination.index,
            originalPosition: result.source.index,
        }));
    }

    return (
        <Root>
            <DragDrop onDragEnd={onDragEnd}>
                <Content>
                    {boardSections.map(section => {
                        return (
                            <Section key={section.id} boards={boardSections.length}>
                                <SectionHeader>
                                    <Text bold>{section.name}</Text>
                                </SectionHeader>
                                
                                
                                <SectionBody id={section.id}>
                                    {tickets
                                        .filter(ticket => ticket.boardSectionId === section.id)
                                        .sort((a, b) => a.sectionPosition - b.sectionPosition)
                                        .map((ticket) => {
                                            return (
                                                <Ticket 
                                                    key={ticket.id}
                                                    backgroundColor="#f58569" 
                                                    id={ticket.id} 
                                                    index={ticket.sectionPosition}
                                                >
                                                    <Text small>{ticket.id}</Text>
                                                    <Text>{ticket.name}</Text>
                                                    <Text small>{ticket.description}</Text>
                                                </Ticket>
                                            );
                                        })
                                    }
                                </SectionBody>
                            </Section>
                        )
                    })}
                </Content>
            </DragDrop>
        </Root>
    );
}