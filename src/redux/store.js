import { configureStore } from "@reduxjs/toolkit";
import burgerMenuSlicer from "./burgerMenuSlicer";
import lightboxSlicer from "./lightboxSlicer";

export const store = configureStore({
    reducer: {
        burgerMenu: burgerMenuSlicer,
        lightbox: lightboxSlicer
    }
})