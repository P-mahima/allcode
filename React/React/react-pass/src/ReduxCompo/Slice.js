import { createSlice } from "@reduxjs/toolkit";


const Slice = createSlice({
    name:'counter',
    initialState : 0,
    reducers : {
        add : (state, {payload}) => state += payload,
        sub : (state , {payload}) => state -= payload
    }
})
export const  {add, sub} = Slice.actions
export default Slice.reducer