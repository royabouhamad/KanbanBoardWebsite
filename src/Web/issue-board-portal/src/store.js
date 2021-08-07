import { configureStore } from '@reduxjs/toolkit';
import boardSectionsReducer from './features/boardSections/boardSectionsSlice';
import ticketsReducer from './features/tickets/ticketsSlice';

export default configureStore({
  reducer: {
    boardSections: boardSectionsReducer,
    tickets: ticketsReducer,
  },
})