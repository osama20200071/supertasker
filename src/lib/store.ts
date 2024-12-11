import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '../features/tasks-slice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = typeof store;
export type AppState = ReturnType<RootState['getState']>;
export type AppDispatch = RootState['dispatch'];

// type AppState = ReturnType<typeof store.getState>;
