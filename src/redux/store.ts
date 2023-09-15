import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {cardsApi} from '../api/cards-api';
import {listenerMiddleware} from './middleware/listener-middle-ware';
import {SliceNames} from './slice-names';
import {auth} from './slices/auth-slice';

export const rootReducer = combineReducers({
    [cardsApi.reducerPath]: cardsApi.reducer,
    [SliceNames.Auth]: auth.reducer,
});

// const persistedUser = localStorageUtil.getAuth();

// const initialAuthState = {
//     authorizationStatus: !!persistedUser,
//     userName: persistedUser,
// };

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(cardsApi.middleware),
    // preloadedState: {
    //     [SliceNames.Auth]: initialAuthState,
    // },
});

// if (initialAuthState.authorizationStatus) {
//     store.dispatch(logIn(initialAuthState));
// }

export type RootState = ReturnType<typeof store.getState>;
