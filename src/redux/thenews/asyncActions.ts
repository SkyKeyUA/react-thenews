/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TheNews } from './type';
export const fetchTheNews = createAsyncThunk<TheNews[]>('thenews/fetchTheNewsStatus', async () => {
  const { data } = await axios.get('https://63fb33547a045e192b64af82.mockapi.io/items');
  return data as TheNews[];
});
