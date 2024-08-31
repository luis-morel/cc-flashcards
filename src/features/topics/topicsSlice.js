import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
      topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            action.payload.quizIds = [];
            state.topics[action.payload.id] = action.payload;
        }
    }    
});


// Topics Action Creator
export const { addTopic } = topicsSlice.actions;

// Topics Reducer
export default topicsSlice.reducer;

// Topics Selector
export const selectTopics = (state) => state.topics.topics;
