// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from '../features/repositorySlice';

const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
