/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thenewsSlice from './thenews/slice';
import filterSlice from './filter/slice';

export const store = configureStore({
  reducer: {
    thenewsSlice,
    filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
