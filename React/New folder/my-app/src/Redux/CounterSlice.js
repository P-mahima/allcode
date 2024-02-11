import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name : 'counter',
    initialState : 0,
    reducers : {
        add : (state , {payload}) => state += payload
    }
})
export const {add} = CounterSlice.actions
export default CounterSlice.reducer