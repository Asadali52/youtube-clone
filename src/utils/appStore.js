import { configureStore } from "@reduxjs/toolkit";
import appMainSlice from './appMainSlice';
import SearchSlice from './SearchSlice';

const appStore = configureStore({
    reducer: {
        app: appMainSlice,
        search: SearchSlice
    }
});

export default appStore;