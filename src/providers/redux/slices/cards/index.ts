import { CaseReducer, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { getRandomNumber } from "src/providers/lib";

export type Card = {
  content: number;
};

interface Slice {
  cards: Card[] | [];
}

interface Reducers extends SliceCaseReducers<Slice> {
  add: CaseReducer<Slice, PayloadAction>;
  remove: CaseReducer<Slice, PayloadAction<{ id: number }>>;
  sort: CaseReducer<Slice, PayloadAction>;
}

const initialState = {
  cards: []
};

const cardsSlice = createSlice<Slice, Reducers>({
  name: "card",
  initialState,
  reducers: {
    add: state => {
      const newCard: Card = { content: getRandomNumber(1, 1000) };
      state.cards = [...state.cards, newCard];
    },
    remove: (state, action) => {
      state.cards = state.cards.filter((_, index) => index !== action.payload.id);
    },
    sort: state => {
      state.cards = state.cards.sort((fCard, sCard) => fCard.content - sCard.content);
    }
  }
});

// actions
export const { add, sort, remove } = cardsSlice.actions;

// selectors
export const getCards = (state: Slice) => state.cards;

// slice
export default cardsSlice.reducer;
