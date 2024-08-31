import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
      quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }    
});


// Quizzes Action Creator
export const { addQuiz } = quizzesSlice.actions;

// Quizzes Reducer
export default quizzesSlice.reducer;

// Quizzes Selector
export const selectQuizzes = (state) => state.quizzes.quizzes;
