import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//BASE URL
const BASE_URL = "https://puzzled-necklace-fawn.cyclic.app/api/v1";

const initialState = {
  joinBoothLoading: false,
  joinBoothSuccess: false,
  joinBoothError: false,
  joinBoothMessage: "",
  joinBoothData: null,
};

export const joinStudyBooth = createAsyncThunk(
  "joinBooth/add",
  async (body, thunkAPI) => {
    // const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "https://bcxafrkyjxv2swwjzm6lu5afui0ylfdw.lambda-url.eu-west-1.on.aws/",
        body
      );
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

const joinBoothSlice = createSlice({
  name: "joinBooth",
  initialState,
  reducers: {
    resetJoinBooth: (state) => {
      state.joinBoothError = false;
      state.joinBoothSuccess = false;
      state.joinBoothLoading = false;
      state.joinBoothMessage = false;
      state.joinBoothData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(joinStudyBooth.pending, (state) => {
        state.joinBoothLoading = true;
      })
      .addCase(joinStudyBooth.fulfilled, (state, action) => {
        state.joinBoothLoading = false;
        state.joinBoothSuccess = true;
        state.joinBoothError = false;
        state.joinBoothData = action.payload;
      })
      .addCase(joinStudyBooth.rejected, (state, action) => {
        state.joinBoothLoading = false;
        state.joinBoothSuccess = false;
        state.joinBoothError = true;
        state.joinBoothMessage = action.payload;
      });
  },
});

export const { resetJoinBooth } = joinBoothSlice.actions;
export default joinBoothSlice.reducer;
