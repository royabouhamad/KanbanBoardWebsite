import { createSlice } from '@reduxjs/toolkit';

export const boardSectionsSlice = createSlice({
    name: "Board Sections",
    initialState: {
        sections: [
            { id: "1", name: "To do"},
            { id: "2", name: "Doing"},
            { id: "3", name: "Done"},
        ],
    },
    reducers: {
        addBoardSection: (state, payload) => {
            state.sections.concat({
                id: payload.id,
                name: payload.name
            });
        },
        removeBoardSection: (state, payload) => {
            state.sections.filter(section => section.id !== payload.id);
        },
        updateBoardSectionName: (state, payload) => {
            state.sections.map(section => (section.id === payload.id) && (section.name = payload.name));
        }
    }
})

export const { addBoardSection, removeBoardSection, updateBoardSectionName } = boardSectionsSlice.actions;
export default boardSectionsSlice.reducer;