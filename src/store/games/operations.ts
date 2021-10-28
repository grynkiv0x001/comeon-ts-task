import { IGamesReducer } from './interfaces';

// TODO: Delete any
export const getGamesOperations = (state: IGamesReducer, { payload }: any): IGamesReducer => {
	return { ...state, games: payload, filteredGames: payload };
};

export const getCategoriesOperations = (state: IGamesReducer, { payload }: any): IGamesReducer => {
	return { ...state, categories: payload };
};

export const filteredByCategory = (state: IGamesReducer, { payload }: any): IGamesReducer => {
	const filteredGamesByCategory = state.games.filter(game => game.categories.includes(payload));

	return { ...state, filteredGames: filteredGamesByCategory, category: payload };
};

export const filteredBySearch = (state: IGamesReducer, { payload }: any): IGamesReducer => {
	if (payload === '') {
		return { ...state, filteredGames: state.games };
	}

	const filteredGamesByCategory = state.games.filter(game => game.categories.includes(state.category));
	const filteredGames = filteredGamesByCategory.filter(game =>
		game.name.toLowerCase().includes(payload.toLowerCase())
	);

	return { ...state, filteredGames };
};
