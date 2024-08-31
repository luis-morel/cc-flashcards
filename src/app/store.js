import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from '../features/quizzes/quizzesSlice.js'
import topicsReducer from '../features/topics/topicsSlice.js';

export default configureStore({
  reducer: {
    quizzes: quizzesReducer,
    topics: topicsReducer
  },
});
