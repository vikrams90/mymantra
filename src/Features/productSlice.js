import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: {
      state: "none",
      message: "no message",
    },
  },
  reducers: {},
    extraReducers: (builder) => {
        builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status.state = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status.state = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status.state = "failed";
        state.status.message = `Error! ${action.error.message}`;
      })
      .addCase(searchProducts.pending, (state, action) => {
        state.status.state = "loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status.state = "succeeded";
        state.products = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.status.state = "failed";
        state.status.message = `Error! ${action.error.message}`;
      });
        
  },
});

export const searchProducts = createAsyncThunk(
  "SEARCH/FETCHPRODUCTS",
  async (search, thunkApi) => {
    try {
      let token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJfaWQiOiI2NWM3MWE4MzRmM2NkYjAyZWY1ZjZjOGQiLCJlbWFpbCI6ImNoZXRhbm1hbHZpeWE5MjRAZ21haWwuY29tIiwibmFtZSI6InRlc3QifSwiaWF0IjoxNzA3NTQ3ODMxLCJleHAiOjE3MDc5Nzk4MzF9.UyM_JEyACIhUi2TsZIk_qkWpNQ66kPC-nTk1aFXouTM";
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.get(
        "http://52.90.114.34:3000/product/searchProduct/" + search,
        config
      );
      return response.data
    } catch (error) {
      throw error.message;
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "PRODUCTS/FETCHPRODUCTS",
  async (category, thunkApi) => {
    try {
      let token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJfaWQiOiI2NWM3MWE4MzRmM2NkYjAyZWY1ZjZjOGQiLCJlbWFpbCI6ImNoZXRhbm1hbHZpeWE5MjRAZ21haWwuY29tIiwibmFtZSI6InRlc3QifSwiaWF0IjoxNzA3NTQ3ODMxLCJleHAiOjE3MDc5Nzk4MzF9.UyM_JEyACIhUi2TsZIk_qkWpNQ66kPC-nTk1aFXouTM";
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.get(
        `http://52.90.114.34:3000/product/getProductBycategory/?categoryId=${category}`,
        config
      );
      return response.data
    } catch (error) {
      console.log(error.message);
      throw error.message;
    }
  }
);

export default productSlice.reducer;
