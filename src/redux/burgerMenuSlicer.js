import { createSlice } from "@reduxjs/toolkit";

const burgerMenuSlicer = createSlice({
    name: 'burgerMenu',
    initialState: {
        isOpen: false
    },

    reducers: {
        modalOpen: state => {
            state.isOpen=true
        },
        modalClose: state => {
            state.isOpen=false
        },
        modalTogle: state => {
            state.isOpen=!state.isOpen
        },
    }
}
)

export const { modalOpen, modalClose, modalTogle } = burgerMenuSlicer.actions;
export const selectIsMenuOpen = state => state.burgerMenu.isOpen;
export default burgerMenuSlicer.reducer;