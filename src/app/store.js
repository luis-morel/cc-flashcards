import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from '../features/cards/cardsSlice.js';
import quizzesReducer from '../features/quizzes/quizzesSlice.js';
import topicsReducer from '../features/topics/topicsSlice.js';

export default configureStore({
  reducer: {
    cards: cardsReducer,
    quizzes: quizzesReducer,
    topics: topicsReducer
  },
});
