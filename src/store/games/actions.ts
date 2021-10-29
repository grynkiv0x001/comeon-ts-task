import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Core
import axios from '../../core/api/axios.instance';
import { API } from '../../core/api/server.api';
import { Game } from '../../core/_models/Game';
import { Category } from '../../core/_models/Category';
import { CATEGORIES_GET, GAMES_GET } from '../actions-types';

type ResponseGetGamesType = { data: Game[] };
type ResponseGetCategoriesType = { data: Category[] };

export const getGames = createAsyncThunk(GAMES_GET, async (): Promise<Game[] | boolean> => {
	try {
		const { data }: ResponseGetGamesType = await axios.get(API.GAMES);
		return data;
	} catch (error) {
		toast('Cannot fetch games!');
		return false;
	}
});

export const getCategories = createAsyncThunk(CATEGORIES_GET, async (): Promise<Category[] | boolean> => {
	try {
		const { data }: ResponseGetCategoriesType = await axios.get(API.CATEGORIES);
		return data;
	} catch (error) {
		toast('Cannot fetch categories!');
		return false;
	}
});
