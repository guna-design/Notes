import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './SliceContent'

export default configureStore({
    reducer:{
        note:noteReducer
    }
})