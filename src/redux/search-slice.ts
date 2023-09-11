import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AnimeWithId} from '../types/animeData';
import {RootState} from './store';

interface SearchSliceState {
    searchResult: AnimeWithId[] | null;
    searchValue: string;
}

const initialState: SearchSliceState = {
    searchResult: null,
    searchValue: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getSearchData(state, action: PayloadAction<AnimeWithId[] | null>) {
            state.searchResult = action.payload;
        },
    },
});

export const searchResultSelector = (state: RootState) => state.search.searchResult;
export const searchValueSelector = (state: RootState) => state.search.searchValue;

export const {getSearchData} = searchSlice.actions;

export {searchSlice};
