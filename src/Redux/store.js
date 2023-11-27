import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import IQformReducer from "../Redux/features/IQformSlice";
import authSliceReducer from "../Redux/features/AuthSlice";
import coursesReducer from "../Redux/features/CoursesSlice";
import gcTokenReducer from "../Redux/features/GetChatToken";
import beginCourseReducer from "../Redux/features/BeginCourseSlice";
import joinBoothReducer from "../Redux/features/JoinBoothSlice";

const reducers = combineReducers({
  formstore: IQformReducer,
  auth: authSliceReducer,
  courses: coursesReducer,
  gcToks: gcTokenReducer,
  beginCourse: beginCourseReducer,
  joinBooth: joinBoothReducer,
});

const persistConfig = {
  key: "intelligoStorage",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
