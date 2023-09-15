import {createSlice} from '@reduxjs/toolkit';
import {SliceNames} from '../slice-names';
import {RootState} from '../store';

type InitialState = {
    authorizationStatus: boolean;
    userName: string | null;
};

const initialState: InitialState = {
    authorizationStatus: false,
    userName: '',
};

export const auth = createSlice({
    name: SliceNames.Auth,
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.authorizationStatus = true;
            state.userName = action.payload.userName;
        },
        logOut: (state) => {
            state.authorizationStatus = false;
        },
    },
});

export const getAuthStatusSelector = (state: RootState) => state.AUTH.authorizationStatus;
export const getUserNameSelector = (state: RootState) => state.AUTH.userName;

export const {logIn, logOut} = auth.actions;
