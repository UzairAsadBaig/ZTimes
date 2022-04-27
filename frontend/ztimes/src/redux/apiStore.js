import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { nodeAPI } from "./nodeAPI";
import announcementSlice from "./announcementSlice";

export const apiStore=configureStore( {
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [ nodeAPI.reducerPath ]: nodeAPI.reducer,
        announcement:announcementSlice,
    },

    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware().concat( nodeAPI.middleware ),

} )

setupListeners(apiStore.dispatch)