import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//BASE URL
const BASE_URL = "https://puzzled-necklace-fawn.cyclic.app/api/v1";

const initialState = {
  beginCourseLoading: false,
  beginCourseSuccess: false,
  beginCourseError: false,
  beginCourseMessage: false,
};

export const addToCourse = createAsyncThunk(
  "beginCourse/add",
  async (body, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.patch(BASE_URL + `/courses`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        return "Enrolled to course successfully";
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

const beginCourseSlice = createSlice({
  name: "beginCourse",
  initialState,
  reducers: {
    resetBeginCourse: (state) => {
      state.beginCourseError = false;
      state.beginCourseSuccess = false;
      state.beginCourseLoading = false;
      state.beginCourseMessage = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCourse.pending, (state) => {
        state.beginCourseLoading = true;
      })
      .addCase(addToCourse.fulfilled, (state, action) => {
        state.beginCourseLoading = false;
        state.beginCourseSuccess = true;
        state.beginCourseError = false;
        state.beginCourseMessage = action.payload;
      })
      .addCase(addToCourse.rejected, (state, action) => {
        state.beginCourseLoading = false;
        state.beginCourseSuccess = false;
        state.beginCourseError = true;
        state.beginCourseMessage = action.payload;
      });
  },
});

export const { resetBeginCourse } = beginCourseSlice.actions;
export default beginCourseSlice.reducer;
