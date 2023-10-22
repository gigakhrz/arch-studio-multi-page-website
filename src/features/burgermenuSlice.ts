import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Burger {
  open: boolean;
}

const initialState: Burger = {
  open: false,
};

const burgerMenuSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    setBurger: (state): void => {
      state.open = !state.open;
    },
  },
});

export const { setBurger } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
