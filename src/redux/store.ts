import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {cardsApi} from '../api/cards-api';
import {listenerMiddleware} from './middleware/listener-middle-ware';
import {SliceNames} from './slice-names';
import {auth} from './slices/auth-slice';

export const rootReducer = combineReducers({
    [cardsApi.reducerPath]: cardsApi.reducer,
    [SliceNames.Auth]: auth.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
