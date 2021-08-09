import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
    Content,
    DragDrop,
    Icons,
    Root,
    Section,
    SectionBody,
    SectionHeader,
    Text,
    Ticket
} from "@kanban/ui-library"; 
import { addTicket, removeTicket, updateTicketSection, updateTicketPosition } from "../features/tickets/ticketsSlice";

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

    const addNewTicket = (boardSectionId, tickets) => {
        dispatch(addTicket({
            id: `${parseInt(tickets[tickets.length-1].id) + 1}`,
            boardSectionId: boardSectionId,
            name: "New Ticket",
            sectionPosition: tickets.filter(ticket => ticket.boardSectionId === boardSectionId).length + 1,
        }));
    }

    const deleteTicket = (ticket) => {
        dispatch(removeTicket({
            id: ticket.id,
            boardSectionId: ticket.boardSectionId,
            sectionPosition: ticket.sectionPosition,
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
                                
                                
                                <SectionBody id={section.id} addFunction={() => addNewTicket(section.id, tickets)}>
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
                                                    <div 
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            justifyContent: "space-between",
                                                        }}
                                                    >
                                                        <Text>{ticket.name}</Text>
                                                        <Icons.CrossIcon style={{ cursor: "pointer" }} onClick={() => deleteTicket(ticket)} />
                                                    </div>
                                                    <Text small>{ticket.description}</Text>
                                                </Ticket>
                                            );
                                        })
                                    }
                                    <div style={{ padding: "0.005rem"}} />
                                </SectionBody>
                            </Section>
                        )
                    })}
                </Content>
            </DragDrop>
        </Root>
    );
}