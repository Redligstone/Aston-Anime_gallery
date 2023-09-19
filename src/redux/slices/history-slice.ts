import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {sliceNames} from '../slice-names';
import {HistoryRecord} from '../../types/history-record';

type InitialState = {
    history: HistoryRecord[];
};

const initialState: InitialState = {
    history: [],
};

export const history = createSlice({
    name: sliceNames.History,
    initialState,
    reducers: {
        updateHistory: (state, action: PayloadAction<HistoryRecord>) => {
            state.history.unshift(action.payload);
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
