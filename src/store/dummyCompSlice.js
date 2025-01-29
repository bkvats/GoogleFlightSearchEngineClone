import { createSlice } from "@reduxjs/toolkit";

export const dummyCompSlice = createSlice({
    name: "dummyComp",
    initialState: {
        isDummyCompVisible: false
    },
    reducers: {
        setDummyCompVisibility: (state, action) => {
            state.isDummyCompVisible = action.payload;
        }
    }
});

export const {setDummyCompVisibility} = dummyCompSlice.actions;