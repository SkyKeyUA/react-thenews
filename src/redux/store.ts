/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thenewsSlice from './thenews/slice';

export const store = configureStore({
  reducer: {
    thenewsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
