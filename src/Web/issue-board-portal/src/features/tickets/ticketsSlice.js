import { createSlice } from "@reduxjs/toolkit";

export const ticketsSlice = createSlice({
    name: "Tickets",
    initialState: [
        { id: "1", boardSectionId: "1", sectionPosition: 1, name: "Setup redux", description: ""},
        { id: "2", boardSectionId: "2", sectionPosition: 1, name: "Work on site", description: "Make site"},
        { id: "3", boardSectionId: "2", sectionPosition: 2, name: "It works", description: "Starting to shape up"},
        { id: "4", boardSectionId: "2", sectionPosition: 3, name: "It works", description: "Starting to shape up"},
        { id: "5", boardSectionId: "3", sectionPosition: 1, name: "It works", description: "Starting to shape up"},
        { id: "6", boardSectionId: "3", sectionPosition: 2, name: "It works", description: "Starting to shape up"},
        { id: "7", boardSectionId: "3", sectionPosition: 3, name: "It works", description: "Starting to shape up"},
        { id: "8", boardSectionId: "3", sectionPosition: 4, name: "It works", description: "Starting to shape up"},
        { id: "9", boardSectionId: "1", sectionPosition: 2, name: "It works", description: "Starting to shape up"},
        { id: "10", boardSectionId: "1", sectionPosition: 3, name: "It works", description: "Starting to shape up"},
        { id: "11", boardSectionId: "2", sectionPosition: 4, name: "It works", description: "Starting to shape up"},
        { id: "12", boardSectionId: "2", sectionPosition: 5, name: "It works", description: "Starting to shape up"},
        { id: "13", boardSectionId: "3", sectionPosition: 5, name: "Setup project", description: "Creat react project and ui lib project"},
        { id: "14", boardSectionId: "3", sectionPosition: 6, name: "Setup project", description: "Creat react project and ui lib project"},
    ],
    reducers: {
        addTicket: (state, { payload }) => {
            return [...state, {
                id: payload.id,
                boardSectionId: payload.boardSectionId,
                name: payload.name,
                description: payload.description ?? "",
                sectionPosition: payload.sectionPosition,
            }];
        },
        removeTicket: (state, { payload }) => {
            return state.filter(ticket => ticket.id !== payload.id).map(ticket => {
                if (ticket.boardSectionId === payload.boardSectionId
                    && ticket.sectionPosition > payload.sectionPosition) {
                    return {
                        ...ticket,
                        sectionPosition: ticket.sectionPosition - 1,
                    }
                }

                return ticket;
            })
        },
        updateTicketSection: (state, { payload }) => {
            return state.map(ticket => {
                if (ticket.id === payload.id){
                    return {
                        ...ticket,
                        boardSectionId: payload.boardSectionId,
                        ticket
                    }
                };
                return ticket;
            });
        },
        updateTicketName: (state, { payload }) => {
            return state.map(ticket => {
                if (ticket.id === payload.id){
                    return {
                        ...ticket,
                        name: payload.name,
                    }
                };
                return ticket;
            });
        },
        updateTicketDescription: (state, { payload }) => {
            return state.map(ticket => {
                if (ticket.id === payload.id){
                    return {
                        ...ticket,
                        description: payload.description,
                    }
                };
                return ticket;
            });
        },
        updateTicketPosition: (state, { payload }) => {
            if (payload.boardSectionId === payload.originalBoardSectionId) {
                return state.map(ticket => {
                    if (ticket.id === payload.id) {
                        return {
                            ...ticket,
                            sectionPosition: payload.sectionPosition,
                        }
                    }

                    if (payload.originalPosition > payload.sectionPosition) {
                        if (ticket.boardSectionId === payload.boardSectionId
                            && ticket.sectionPosition >= payload.sectionPosition
                            && ticket.sectionPosition < payload.originalPosition) {
                                return {
                                    ...ticket,
                                    sectionPosition: ticket.sectionPosition + 1,
                                }
                        }
                    }

                    if (ticket.boardSectionId === payload.boardSectionId
                        && ticket.sectionPosition <= payload.sectionPosition
                        && ticket.sectionPosition > payload.originalPosition) {
                            return {
                                ...ticket,
                                sectionPosition: ticket.sectionPosition - 1,
                            }
                    }

                    return ticket;
                });
            }

            return state.map(ticket => {
                if (ticket.id === payload.id) {
                    return {
                        ...ticket,
                        sectionPosition: payload.sectionPosition === 0 ? 1 : payload.sectionPosition,
                    }
                }

                if (ticket.boardSectionId === payload.boardSectionId
                    && ticket.sectionPosition >= payload.sectionPosition) {
                        return {
                            ...ticket,
                            sectionPosition: ticket.sectionPosition + 1,
                        }
                }

                if (ticket.boardSectionId === payload.originalBoardSectionId
                    && ticket.sectionPosition > payload.originalPosition) {
                        return {
                            ...ticket,
                            sectionPosition: ticket.sectionPosition - 1,
                        }
                }

                return ticket;
            });
        },
        setTickets: (state, { payload }) => {
            return state = payload;
        }
    }
})

export const {
    addTicket,
    removeTicket,
    updateTicketSection,
    updateTicketName,
    updateTicketDescription,
    updateTicketPosition,
    setTickets,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;