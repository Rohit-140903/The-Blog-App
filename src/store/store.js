import { configureStore } from "@reduxjs/toolkit"
import authSlice from './authSlice';
import postSlice from './postSlice';

const store = configureStore({
    reducer : {

        auth : authSlice,
        post: postSlice // This is for managing posts, if you have a postSlice but not 
        // using it in the current codebase, you can remove it. 

    }
});

export default store;