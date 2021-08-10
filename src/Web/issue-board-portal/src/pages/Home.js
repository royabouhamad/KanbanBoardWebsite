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
    Ticket,
} from "@kanban/ui-library"; 
import { 
    addTicket,
    removeTicket,
    setTickets,
    updateTicketSection,
    updateTicketPosition,
} from "../features/tickets/ticketsSlice";
import {
    addBoardSection,
    removeBoardSection,
    updateBoardSectionPosition,
} from "../features/boardSections/boardSectionsSlice";

export default function Home() {
    const boardSections = useSelector(state => state.boardSections);
    const tickets = useSelector(state => state.tickets);
    const dispatch = useDispatch();
    console.log(tickets);
    console.log(boardSections.slice().sort((a, b) => a.sectionPosition - b.sectionPosition));

    const onDragEnd = (result) => {
        console.log(result);
        if (!result.destination) {
            return;
        }

        if (result.type === "section") {
            dispatch(updateBoardSectionPosition({
                id: result.draggableId[1],
                originalPosition: result.source.index,
                sectionPosition: result.destination.index,
            }));

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

    const addNewBoardSection = () => {
        dispatch(addBoardSection({
            id: `${parseInt(boardSections[boardSections.length-1].id) + 1}`,
            name: "New Board",
            sectionPosition: boardSections.length + 1,
        }));
    }

    const deleteBoardSection = (section) => {
        dispatch(removeBoardSection({
            id: section.id,
            originalPosition: section.sectionPosition
        }));

        dispatch(setTickets(tickets.filter(ticket => ticket.boardSectionId !== section.id)));
    }

    return (
        <Root>
            <DragDrop onDragEnd={onDragEnd}>
                <Content id="board" addFunction={() => addNewBoardSection()}>
                    {boardSections.slice().sort((a, b) => a.sectionPosition - b.sectionPosition).map((section, index) => {
                        return (
                            <Section key={section.id} id={section.id} boards={boardSections.length} index={index}>
                                <SectionHeader>
                                    <Text bold>{section.name}</Text>
                                    <Icons.CrossIcon style={{ cursor: "pointer" }} onClick={() => deleteBoardSection(section)} />
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