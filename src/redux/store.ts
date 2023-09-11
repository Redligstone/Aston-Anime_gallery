import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {cardsApi} from '../api/cardsApi';

export const rootReducer = combineReducers({
    [cardsApi.reducerPath]: cardsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
