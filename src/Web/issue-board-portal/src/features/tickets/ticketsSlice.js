import { createSlice, nanoid } from "@reduxjs/toolkit";

export const ticketsSlice = createSlice({
    name: "Tickets",
    initialState: [],
    reducers: {
        addTicket: {
            reducer(state, { payload }){
                return [...state, payload];
            },
            prepare(boardSectionId, name, description, sectionPosition){
                return {
                    payload : {
                        id: nanoid(),
                        boardSectionId,
                        name,
                        description,
                        sectionPosition
                    }
                };
            }
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