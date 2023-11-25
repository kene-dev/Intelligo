import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//BASE URL
const BASE_URL = "https://puzzled-necklace-fawn.cyclic.app/api/v1";

const initialState = {
  preference: "",
  goals: "",
  experience: "",
  styles: "",
  kycLoading: false,
  kycSuccess: false,
  kycError: false,
  kycMessage: "",
};

export const sendKyc = createAsyncThunk(
  "kycSlice/send",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL + `/auth/register`, body);
      console.log(response.data);
      if (response.status === 200) {
        return "Account successfully registered";
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

const kycSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    resetKyc: (state) => {
      state.kycLoading = false;
      state.kycError = false;
      state.kycSuccess = false;
      state.kycMessage = false;
    },

    updateKycData: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendKyc.pending, (state) => {
        state.kycLoading = true;
      })
      .addCase(sendKyc.fulfilled, (state, action) => {
        state.kycLoading = false;
        state.kycSuccess = true;
        state.kycError = false;
        state.kycMessage = action.payload;
      })
      .addCase(sendKyc.rejected, (state, action) => {
        state.kycLoading = false;
        state.kycSuccess = false;
        state.kycError = true;
        state.kycMessage = action.payload;
      });
  },
});

export const { resetKyc, updateKycData } = kycSlice.actions;
export default kycSlice.reducer;
