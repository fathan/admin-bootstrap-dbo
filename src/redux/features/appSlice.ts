import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  isVisibleSidebarMobile: boolean;
};

const initialState: IAppState = {
  isVisibleSidebarMobile: false
};

export const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    reset: () => initialState,
    setIsVisibleSidebarMobile: (state, action: PayloadAction<boolean>): void => {
      state.isVisibleSidebarMobile = action.payload;
    }
  },
});

export const {
  reset,
  setIsVisibleSidebarMobile
} = app.actions;

export default app.reducer;
