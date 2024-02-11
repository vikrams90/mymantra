import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  status: {
    state: "none",
    message: "no message",
  },
};
export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.pending, (state, action) => {
        state.status.state = "loading";
      })
      .addCase(fetchdata.fulfilled, (state, action) => {
        state.status.state = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchdata.rejected, (state, action) => {
        state.status.state = "failed";
        state.status.message = `Error! ${action.error.message}`;
      });
  },
});

export const fetchdata = createAsyncThunk("fetchData/fetch", async () => {
  try {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJfaWQiOiI2NWM3MWE4MzRmM2NkYjAyZWY1ZjZjOGQiLCJlbWFpbCI6ImNoZXRhbm1hbHZpeWE5MjRAZ21haWwuY29tIiwibmFtZSI6InRlc3QifSwiaWF0IjoxNzA3NTQ3ODMxLCJleHAiOjE3MDc5Nzk4MzF9.UyM_JEyACIhUi2TsZIk_qkWpNQ66kPC-nTk1aFXouTM";
    const config = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.get("http://52.90.114.34:3000/category/viewCategory",
      config
    );
    return response.data;
  } catch (error) {
    throw error.message;
  }
});

export default categorySlice.reducer;
