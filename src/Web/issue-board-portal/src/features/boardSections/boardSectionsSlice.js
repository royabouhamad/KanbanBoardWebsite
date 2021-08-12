import { createSlice, nanoid } from '@reduxjs/toolkit';

export const boardSectionsSlice = createSlice({
    name: "Board Sections",
    initialState: [],
    reducers: {
        addBoardSection: {
            reducer(state, { payload }) {
                return [...state, payload];
            },
            prepare(name, sectionPosition) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        sectionPosition
                    }
                };
            }
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
            return state.map(section => {
                if (section.id == payload.id) {
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