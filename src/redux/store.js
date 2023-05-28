import {configureStore} from "@reduxjs/toolkit";
import data from "./data";
export default configureStore({
    reducer:{
        contact:data,
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
}),
})