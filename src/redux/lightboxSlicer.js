import { createSlice } from "@reduxjs/toolkit";

const lightboxSlicer = createSlice({
    name: 'lightbox',
    initialState: {
        isOpen: false,
        selectedImage: null
    },

    reducers: {
        modalOpen: (state) => {
            state.isOpen = true
            
        },
        modalClose: state => {
            state.isOpen=false
        },
        modalTogle: (state) => {
            state.isOpen = !state.isOpen
            
        },
        selectImage: (state, action) => {
            state.selectedImage = action.payload; 
        }
    }
}
)

export const { modalOpen, modalClose, modalTogle, selectImage } = lightboxSlicer.actions;
export const isImageOpen = state => state.lightbox.isOpen;
export const getSelectedImage = state => state.lightbox.selectedImage;
export default lightboxSlicer.reducer;