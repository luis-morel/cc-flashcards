import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
      cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }    
});


// Cards Action Creators
export const { addCard } = cardsSlice.actions;

// Cards Reducer
export default cardsSlice.reducer;

// Cards Selectors
export const selectCard = (id) => (state) => state.cards.cards[id];
