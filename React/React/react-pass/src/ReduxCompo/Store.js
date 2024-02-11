// import Store from "../REDUX/Store"
import { configureStore } from "@reduxjs/toolkit"
import Slice from "./Slice"

const Store = configureStore({

    reducer: {
        count : Slice
    }
})
export default Store