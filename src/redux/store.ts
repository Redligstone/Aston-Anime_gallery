import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {cardsApi} from '../api/cards-api';
import {userStateSyncMiddleware} from './middleware/users-state-sync-middleware';
import {sliceNames} from './slice-names';
import {auth} from './slices/auth-slice';

export const rootReducer = combineReducers({
    [cardsApi.reducerPath]: cardsApi.reducer,
    [sliceNames.Auth]: auth.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(userStateSyncMiddleware.middleware)
            .concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
