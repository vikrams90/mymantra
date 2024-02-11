import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist : []
    },
    reducers: {
        addItem: (state, action) => {
            if(state.wishlist.find(wish => wish._id === action.payload._id)) return ;
            state.wishlist.push(action.payload)
        },
        removeItem: (state, action) => {

            state.wishlist= state.wishlist.filter((item)=> item._id !== action.payload._id)
        }
    },
    extraReducers: (builder) => {
        
    }

})
export const {addItem ,removeItem}  = wishlistSlice.actions;
export default  wishlistSlice.reducer;