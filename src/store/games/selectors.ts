
import { StoreType } from "../store";

import { Game } from "../../core/_models/Game";
import { Category } from "../../core/_models/Category";

export const selectorGetGames = (store: StoreType): Game[] => {
	return store.gamesRedux.games;
};

export const selectorGetFilteredGames = (store: StoreType): Game[] => {
	return store.gamesRedux.filteredGames;
};

export const selectorCurrentCategory = (store: StoreType): number => {
	return store.gamesRedux.category;
};

export const selectorCategories = (store: StoreType): Category[] => {
	return store.gamesRedux.categories;
};