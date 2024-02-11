import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "Auth",
  initialState: {
    user: {},
    token: "",
    status: {
      state: "none",
      message: "no message",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInGoogle.pending, (state, action) => {
        state.status.state = "loading";
      })
      .addCase(signInGoogle.fulfilled, (state, action) => {
        state.status.state = "succeeded";
        state.user = action.payload.current_user;
        state.token = action.payload.token;
      })
      .addCase(signInGoogle.rejected, (state, action) => {
        state.status.state = "failed";
        state.status.message = `Error! ${action.error.message}`;
      });
  },
});

export default userSlice.reducer;

export const signInGoogle = createAsyncThunk(
  "user/signIn",
  async (email, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://52.90.114.34:3000/customer/login-with-google",
        { email: email }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error.message;
    }
  }
);
