import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//BASE URL
const BASE_URL = "https://puzzled-necklace-fawn.cyclic.app/api/v1";

const initialState = {
  courseGroupLoading: false,
  courseGroupSuccess: false,
  courseGroupError: false,
  courseGroupMessage: "",
  courseGroupData: null,
};

export const getCourseGroup = createAsyncThunk(
  "courseGroup/add",
  async (body, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        BASE_URL + `/chat/groups/getUserGroup`,
        body,
        {
          headers: {
            Authorization: ` Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      return response.data.groupId;
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

const courseGroupSlice = createSlice({
  name: "courseGroup",
  initialState,
  reducers: {
    resetCourseGroup: (state) => {
      state.courseGroupError = false;
      state.courseGroupSuccess = false;
      state.courseGroupLoading = false;
      state.courseGroupMessage = false;
      state.courseGroupData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourseGroup.pending, (state) => {
        state.courseGroupLoading = true;
      })
      .addCase(getCourseGroup.fulfilled, (state, action) => {
        state.courseGroupLoading = false;
        state.courseGroupSuccess = true;
        state.courseGroupError = false;
        state.courseGroupData = action.payload;
      })
      .addCase(getCourseGroup.rejected, (state, action) => {
        state.courseGroupLoading = false;
        state.courseGroupSuccess = false;
        state.courseGroupError = true;
        state.courseGroupMessage = action.payload;
      });
  },
});

export const { resetCourseGroup } = courseGroupSlice.actions;
export default courseGroupSlice.reducer;
