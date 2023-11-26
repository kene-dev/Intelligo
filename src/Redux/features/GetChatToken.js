import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//BASE URL
const BASE_URL = "https://puzzled-necklace-fawn.cyclic.app/api/v1";

const initialState = {
  gcToken: null,
  gcTokenLoading: false,
  gcTokenSuccess: false,
  gcTokenError: false,
};

export const getStreamToken = createAsyncThunk(
  "gcToken/fetch",
  async (thunkAPI) => {
    const id = localStorage.getItem("uid");
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(BASE_URL + `/chat/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        const obj = error.response.data;
        const objKey = Object.keys(obj)[0];
        let err = obj[objKey];
        console.log("RESPONSE ERROR" + err);
        return thunkAPI.rejectWithValue(err);
      } else if (error.request) {
        console.log("REQUEST ERROR" + error.request);
        return thunkAPI.rejectWithValue("something went terribly wrong");
      } else {
        const obj = error.response.data;
        const objKey = Object.keys(obj)[0];
        let err = obj[objKey];
        return thunkAPI.rejectWithValue(err);
      }
    }
  }
);

const gcTokenSlice = createSlice({
  name: "gcToken",
  initialState,
  reducers: {
    resetGCToken: (state) => {
      state.gcTokenError = false;
      state.gcTokenSuccess = false;
      state.gcTokenLoading = false;
      state.gcTokenMessage = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStreamToken.pending, (state) => {
        state.gcTokenLoading = true;
      })
      .addCase(getStreamToken.fulfilled, (state, action) => {
        state.gcTokenLoading = false;
        state.gcTokenSuccess = true;
        state.gcTokenError = false;
        state.gcToken = action.payload;
      })
      .addCase(getStreamToken.rejected, (state, action) => {
        state.gcTokenLoading = false;
        state.gcTokenRegisterSuccess = false;
        state.gcTokenError = true;
        state.gcTokenMessage = action.payload;
      });
  },
});

export const { resetGCToken } = gcTokenSlice.actions;
export default gcTokenSlice.reducer;
