import { configureStore } from "@reduxjs/toolkit";
import { dummyCompSlice } from "./dummyCompSlice";

export const store = configureStore({
    reducer: {
        dummyComp: dummyCompSlice.reducer
    }
})