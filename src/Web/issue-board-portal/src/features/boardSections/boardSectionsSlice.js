import { createSlice } from '@reduxjs/toolkit';

export const boardSectionsSlice = createSlice({
    name: "Board Sections",
    initialState: [
        { id: "1", name: "To do", sectionPosition: 1},
        { id: "2", name: "Doing", sectionPosition: 2},
        { id: "3", name: "Done", sectionPosition: 3},
        { id: "4", name: "Testing", sectionPosition: 4},
    ],
    reducers: {
        addBoardSection: (state, { payload }) => {
            return state.concat({
                id: payload.id,
                name: payload.name,
                sectionPosition: payload.sectionPosition,
            });
        },
        removeBoardSection: (state, { payload }) => {
            return state.filter(section => section.id !== payload.id).map(section => {
                if (section.sectionPosition > payload.originalPosition) {
                    return {
                        ...section,
                        sectionPosition: section.sectionPosition - 1,
                    }
                }

                return section;
            });
        },
        updateBoardSectionName: (state, { payload }) => {
            return state.map(section => {
                if (section.id === payload.id) {
                    return {
                        ...section,
                        name: payload.name,
                    }
                }

                return section;
            });
        },
        updateBoardSectionPosition: (state, { payload }) => {
            if (payload.sectionPosition === payload.originalPosition) {
                return state;
            }

            return state.map(section => {
                if (section.id === payload.id) {
                    return {
                        ...section,
                        sectionPosition: payload.sectionPosition === 0 ? 1 : payload.sectionPosition,
                    }
                }

                if (section.sectionPosition > payload.originalPosition
                    && section.sectionPosition <= payload.sectionPosition) {
                        return {
                            ...section,
                            sectionPosition: section.sectionPosition - 1,
                        }
                }

                if (section.sectionPosition < payload.originalPosition
                    && section.sectionPosition >= payload.sectionPosition) {
                        return {
                            ...section,
                            sectionPosition: section.sectionPosition + 1,
                        }
                }

                return section;
            });
        }
    }
})

export const { addBoardSection, removeBoardSection, updateBoardSectionName, updateBoardSectionPosition } = boardSectionsSlice.actions;
export default boardSectionsSlice.reducer;