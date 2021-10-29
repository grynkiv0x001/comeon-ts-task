import { createSlice } from '@reduxjs/toolkit';

import { getCategories, getGames } from './actions';
import { IGamesReducer } from './interfaces';
import {
  filteredByCategory,
  filteredBySearch,
  getGamesOperations,
  getCategoriesOperations
} from './operations';

const initialValue: IGamesReducer = {
	category: 0,
	games: [],
	categories: [],
	filteredGames: [],
};

export const GamesStore = createSlice({
	name: 'games',
	initialState: initialValue,
	reducers: {
		filterByCategory: filteredByCategory,
		filterBySearch: filteredBySearch,
	},
	extraReducers: builder => {
		builder
			.addCase(getGames.fulfilled, getGamesOperations)
			.addCase(getCategories.fulfilled, getCategoriesOperations);
	},
});

export const { filterByCategory, filterBySearch } = GamesStore.actions;
export default GamesStore.reducer;