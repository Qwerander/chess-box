import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cards from './reducers/cardsSlice'

export const store = configureStore({
  reducer: {
    cards
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
