import { createSlice } from "@reduxjs/toolkit";

const appMainSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
});

export const { toggleMenu } = appMainSlice.actions;

export default appMainSlice.reducer;