import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
      topics: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
        },
        addTopic: (state, action) => {
            action.payload.quizIds = [];
            state.topics[action.payload.id] = action.payload;
        }
    }    
});


// Topics Action Creators
export const { addQuiz, addTopic } = topicsSlice.actions;

// Topics Reducer
export default topicsSlice.reducer;

// Topics Selector
export const selectTopics = (state) => state.topics.topics;
