import { configureStore } from "@reduxjs/toolkit";
import auth from '../features/auth/AuthSlice'
 

 export const store = configureStore({
    reducer: {
        auth

    }
});

export default store;