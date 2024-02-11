import CreateSlice from "./CreateSlice";

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
    reducer:{
        count: CreateSlice
    }
})
export default Store