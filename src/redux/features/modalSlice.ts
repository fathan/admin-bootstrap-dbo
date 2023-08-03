import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IModalState {
  isVisibleModalDetail: boolean;
};

const initialState: IModalState = {
  isVisibleModalDetail: false
};

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    reset: () => initialState,
    setIsVisibleModalDetail: (state, action: PayloadAction<boolean>): void => {
      state.isVisibleModalDetail = action.payload;
    }
  },
});

export const {
  reset,
  setIsVisibleModalDetail
} = modal.actions;

export default modal.reducer;
