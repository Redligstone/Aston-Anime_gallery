import {createSlice} from '@reduxjs/toolkit';
import {SliceNames} from '../slice-names';
import {HistoryRecord} from '../../types/history-record';

type InitialState = {
    history: HistoryRecord[];
};

const initialState: InitialState = {
    history: [],
};

export const history = createSlice({
    name: SliceNames.History,
    initialState,
    reducers: {
        updateHistory: (state, action) => {
            state.history = [action.payload, ...state.history];
        },
        setHistory: (state, action) => {
            state.history = action.payload;
        },
        clearHistory: (state) => {
            state.history = [];
        },
    },
});

export const {updateHistory, setHistory, clearHistory} = history.actions;
