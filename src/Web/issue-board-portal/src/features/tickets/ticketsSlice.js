import { createSlice } from "@reduxjs/toolkit";

export const ticketsSlice = createSlice({
    name: "Tickets",
    initialState: {
        tickets: [
            { id: "1", boardSectionId: "1", name: "Setup redux", description: ""},
            { id: "2", boardSectionId: "2", name: "Work on site", description: "Make site"},
            { id: "3", boardSectionId: "2", name: "It works", description: "Starting to shape up"},
            { id: "4", boardSectionId: "3", name: "Setup project", description: "Creat react project and ui lib project"},
        ],
    },
    reducers: {
        addTicket: (state, payload) => {
            state.tickets.concat({
                id: payload.id,
                boardSectionId: payload.boardSectionId,
                name: payload.name,
                description: payload.description ?? "",
            });
        },
        removeTicket: (state, payload) => {
            state.tickets.filter(ticket => ticket.id !== payload.id);
        },
        updateTicket: (state, payload) => {
            state.tickets.map(ticket => 
                (ticket.id === payload.id) && 
                (ticket.boardSectionId = payload.boardSectionId ?? ticket.boardSectionId) &&
                (ticket.name = payload.name ?? ticket.name) &&
                (ticket.description = payload.description ?? ticket.description)
            );
        }
    }
})

export const { addTicket, removeTicket, updateTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;