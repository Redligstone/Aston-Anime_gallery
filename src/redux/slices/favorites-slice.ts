import {createSlice} from '@reduxjs/toolkit';
import {sliceNames} from '../slice-names';
import {AnimeWithId} from '../../types/anime-data';
import {RootState} from '../store';

type InitialState = {
    favorites: AnimeWithId[];
};

const initialState: InitialState = {
    favorites: [],
};

export const favorite = createSlice({
    name: sliceNames.Favorite,
    initialState,
    reducers: {
        setFavorites: (state, action) => {
            state.favorites = [...action.payload];
        },
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        deleteFavorite: (state, action) => {
            state.favorites = [...state.favorites.filter((item) => item.id !== action.payload)];
        },
        clearFavorites: (state) => {
            state.favorites = [];
        },
    },
});

export const getFavorites = (state: RootState): AnimeWithId[] => state.FAVORITE.favorites;

export const {setFavorites, addFavorite, deleteFavorite, clearFavorites} = favorite.actions;
