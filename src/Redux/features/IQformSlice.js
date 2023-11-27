import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//BASE URL
const BASE_URL = "https://puzzled-necklace-fawn.cyclic.app/api/v1";

const initialState = {
  question_1: "",
  question_2: "",
  question_3: "",
  question_4: "",
  question_5: "",
  question_6: "",
  question_7: "",
  question_8: "",
  question_9: "",

  formQuestion: null,

  IQformLoading: false,
  IQformSuccess: false,
  IQScoringSuccess: false,
  IQformError: false,
  IQformMessage: "",
};

export const getQuestions = createAsyncThunk(
  "IQform/fetch",
  async (thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL + `/scoring/questions`);
      console.log(response.data);
      if (response.status === 200) {
        return response.data.data;
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

export const submitScoring = createAsyncThunk(
  "IQform/scoring",
  async (body, thunkAPI) => {
    const id = localStorage.getItem("uid");
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        BASE_URL + `/scoring/get-score/${id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        return response.data.data;
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

const IQformSlice = createSlice({
  name: "IQform",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    resetIQformInput: (state) => {
      (state.question_1 = ""),
        (state.question_2 = ""),
        (state.question_3 = ""),
        (state.question_4 = ""),
        (state.question_5 = ""),
        (state.question_6 = ""),
        (state.question_7 = ""),
        (state.question_8 = ""),
        (state.question_9 = "");
    },

    resetIQform: (state) => {
      state.IQformError = false;
      state.IQformSuccess = false;
      (state.IQScoringSuccess = false), (state.IQformLoading = false);
      state.IQformMessage = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.IQformLoading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.IQformLoading = false;
        state.IQformSuccess = true;
        state.IQformError = false;
        state.formQuestion = action.payload;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.IQformLoading = false;
        state.IQformSuccess = false;
        state.IQformError = true;
        state.IQformMessage = action.payload;
      })

      .addCase(submitScoring.pending, (state) => {
        state.IQformLoading = true;
      })
      .addCase(submitScoring.fulfilled, (state, action) => {
        state.IQformLoading = false;
        state.IQformSuccess = true;
        state.IQformError = false;
        state.IQScoringSuccess = action.payload;
      })
      .addCase(submitScoring.rejected, (state, action) => {
        state.IQformLoading = false;
        state.IQformSuccess = false;
        state.IQformError = true;
        state.IQformMessage = action.payload;
      });
  },
});

export const { resetIQform, resetIQformInput, updateFormData } =
  IQformSlice.actions;
export default IQformSlice.reducer;
