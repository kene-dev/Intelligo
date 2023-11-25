import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//BASE URL
const BASE_URL = "https://puzzled-necklace-fawn.cyclic.app/api/v1";

const initialState = {
  allCourses: null,
  singleCourse: null,
  allCoursesLoading: false,
  allCoursesSuccess: false,
  allCoursesError: false,
  allCoursesMessage: "",
};

export const getCourses = createAsyncThunk(
  "courses/fetch",
  async (thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL + `/courses`);
      console.log(response.data);
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

export const getSingleCourse = createAsyncThunk(
  "courses/fetchSingle",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL + `/courses/single/${id}`);
      console.log(response.data);
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

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    resetCourses: (state) => {
      state.allCoursesError = false;
      state.allCoursesSuccess = false;
      state.allCoursesLoading = false;
      state.allCoursesMessage = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.allCoursesLoading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.allCoursesLoading = false;
        state.allCoursesSuccess = true;
        state.allCoursesError = false;
        state.allCourses = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.allCoursesLoading = false;
        state.allCoursesSuccess = false;
        state.allCoursesError = true;
        state.allCoursesMessage = action.payload;
      })

      .addCase(getSingleCourse.pending, (state) => {
        state.allCoursesLoading = true;
      })
      .addCase(getSingleCourse.fulfilled, (state, action) => {
        state.allCoursesLoading = false;
        state.allCoursesSuccess = true;
        state.allCoursesError = false;
        state.singleCourse = action.payload;
      })
      .addCase(getSingleCourse.rejected, (state, action) => {
        state.allCoursesLoading = false;
        state.allCoursesSuccess = false;
        state.allCoursesError = true;
        state.allCoursesMessage = action.payload;
      });
  },
});

export const { resetCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
