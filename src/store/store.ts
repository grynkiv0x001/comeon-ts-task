import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";

import userReducer from './user/reducer';
import gamesReducer from './games/reducer';

export const store = configureStore({
  reducer: {
    userRedux: userReducer,
    gamesRedux: gamesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type StoreType = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, Action<string>>;
