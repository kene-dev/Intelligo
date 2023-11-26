import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//BASE URL
const BASE_URL = "https://puzzled-necklace-fawn.cyclic.app/api/v1";

const initialState = {
  user: null,
  userDetails: null,
  authRegisterSuccess: false,
  authLoading: false,
  authSuccess: false,
  authError: false,
  authMessage: "",

  userDeetsLoading: false,
  userDeetsSuccess: false,
  userDeetsError: false,
};

export const registerUser = createAsyncThunk(
  "authSlice/register",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL + `/auth/register`, body);
      console.log(response.data);
      if (response.status === 201) {
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

export const loginUser = createAsyncThunk(
  "authSlice/login",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL + `/auth/login`, body);
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("uid", response.data._id);
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

export const getUserDetails = createAsyncThunk(
  "auth/userDeets",
  async (thunkAPI) => {
    const id = localStorage.getItem("uid");
    const token = localStorage.getItem("token");
    // console.log("USER ID: " + id);
    try {
      const response = await axios.get(BASE_URL + `/user/${id}`, {
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
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      } else if (error.request) {
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

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.authError = false;
      state.authSuccess = false;
      state.authLoading = false;
      state.authMessage = false;
      state.authRegisterSuccess = false;
    },

    resetUserDeets: (state) => {
      (state.userDeetsLoading = false),
        (state.userDeetsSuccess = false),
        (state.userDeetsError = false);
    },

    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(registerUser.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.authLoading = false;
        state.authRegisterSuccess = true;
        state.authError = false;
        state.authMessage = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.authLoading = false;
        state.authRegisterSuccess = false;
        state.authError = true;
        state.authMessage = action.payload;
      })

      .addCase(loginUser.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authLoading = false;
        state.authSuccess = true;
        state.authError = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authLoading = false;
        state.authSuccess = false;
        state.authError = true;
        state.authMessage = action.payload;
      })

      // USER DETAILS HANDLER
      .addCase(getUserDetails.pending, (state) => {
        state.userDeetsLoading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.userDeetsLoading = false;
        state.userDeetsSuccess = true;
        state.userDeetsError = false;
        state.userDetails = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.userDeetsLoading = false;
        state.userDeetsSuccess = false;
        state.userDeetsError = true;
        state.authMessage = action.payload;
      });
  },
});

export const { resetAuth, logoutUser, resetUserDeets } = authSlice.actions;
export default authSlice.reducer;
