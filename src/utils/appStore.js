import { configureStore } from "@reduxjs/toolkit";
import appMainSlice from './appMainSlice';
import SearchSlice from './SearchSlice';
import chatSlice from './chatSlice';

const appStore = configureStore({
    reducer: {
        app: appMainSlice,
        search: SearchSlice,
        chat: chatSlice,
    }
});

export default appStore;