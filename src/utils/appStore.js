import { configureStore } from "@reduxjs/toolkit";
import appMainSlice from './appMainSlice';

const appStore = configureStore({
    reducer: {
        app: appMainSlice
    }
});

export default appStore;