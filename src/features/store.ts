import { configureStore } from "@reduxjs/toolkit";
import burgermenuSlice, { Burger } from "./burgermenuSlice";

const store = configureStore({
  reducer: {
    burger: burgermenuSlice,
  },
});

export type Rootstate = {
  burger: Burger;
};

export default store;
