import { combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { gamesReducer } from "./games-service/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  games: gamesReducer,
});

export type RootStateRedux = ReturnType<typeof rootReducer>;
