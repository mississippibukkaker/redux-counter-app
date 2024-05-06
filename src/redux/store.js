import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./counterSlice";

// 状態を一元管理している場所、store
export const store = configureStore({
  reducer: { counter: counterReducer },
});
