import { createSlice } from "@reduxjs/toolkit";

const initialState = 0
const CounterSlice = createSlice({
    name : 'counter',
    initialState,
    reducer : {
        add : (state ,{payload}) => state += payload
    }
})
export const {add} = CounterSlice.actions
export default CounterSlice.reducer