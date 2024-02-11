import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name : 'counter',
    initialState : 0,
    reducers : {
        add : (state , {payload}) => state += payload,
        sub : (state,{payload}) => state -= payload,
        mul : (state,{payload}) => state *= payload,
        div : (state, {payload}) => state /= payload
    }
})

export const {add, sub, mul, div} = CounterSlice.actions
export default CounterSlice.reducer