import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from './api';


export interface ICard {
  id: number
  title: string;
  startTime: string;
  description: string;
  price: number;
  people: number;
  isParticipate: boolean;
}

export interface ICardsState {
  cards: Array<ICard>
  loading: boolean
}

const initialState: ICardsState = {
  cards: [],
  loading: false
};

export const cardsAsync = createAsyncThunk(
  'cards/fetchCards',
  async () => {
    const response = await fetchData();
    return response.data;
  }
);

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    participate: (state, action: PayloadAction<{ id: number }>) => {
      const card = state.cards.find(card => card.id === action.payload.id)
      if (card) {
        card.isParticipate = true
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(cardsAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(cardsAsync.fulfilled, (state, action) => {
        state.cards = action.payload
        state.loading = false
      })


  },
});

export const { participate } = cardsSlice.actions;


export default cardsSlice.reducer;
