import {createSlice} from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name:'countet',
    initialState: 0 ,
    reducers:{
        add: (state,{payload}) => state+=payload,
        sub:(state,{payload}) => state -= payload
    }
})
export const {add, sub} =CounterSlice.actions
export default CounterSlice.reducer