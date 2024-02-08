import { configureStore } from "@reduxjs/toolkit";
import burgerMenuSlicer from "./burgerMenuSlicer";

export const store = configureStore({
    reducer: {
        burgerMenu: burgerMenuSlicer,
    }
})