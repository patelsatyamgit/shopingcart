import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice";


export const Store= configureStore({
    reducer:{
        Counter:CounterSlice,
    }
})