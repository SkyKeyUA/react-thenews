/** @format */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TheNews, TheNewsSliceState, Status } from './type';
import { fetchTheNews } from './asyncActions';

const initialState: TheNewsSliceState = {
  items: [],
  status: Status.LOADING, // loading \ success \ error
};

export const thenewsSlice = createSlice({
  name: 'thenews',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TheNews[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTheNews.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
      console.log('Data is being sent');
    });
    builder.addCase(fetchTheNews.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
      console.log(state, 'All Good');
    });
    builder.addCase(fetchTheNews.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
      console.log('Was Error');
    });
  },
});

export const { setItems } = thenewsSlice.actions;

export default thenewsSlice.reducer;
