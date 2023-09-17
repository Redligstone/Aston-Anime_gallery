import {createListenerMiddleware} from '@reduxjs/toolkit';
import {logIn} from '../slices/auth-slice';
import {localStorageUtil} from '../../utils/local-storage';
import {init} from '../actions/init';
import {HistoryRecord} from '../../types/history-record';
import {setHistory, updateHistory} from '../slices/history-slice';
import {search} from '../actions/search';
import {addFavorite, deleteFavorite} from '../slices/favorites-slice';

const userStateSyncMiddleware = createListenerMiddleware();

userStateSyncMiddleware.startListening({
    actionCreator: init,
    effect: (action, listenerApi) => {
        const userName = localStorageUtil.getAuth();
        if (userName) {
            const userInfo = localStorageUtil.getUser(userName);
            listenerApi.dispatch(logIn(userInfo));
            listenerApi.dispatch(setHistory(userInfo?.history));
        }
    },
});

userStateSyncMiddleware.startListening({
    actionCreator: logIn,
    effect: (action) => {
        localStorageUtil.setItem(action.payload.userName, action.payload);
        localStorageUtil.setAuth(action.payload.userName);
    },
});

userStateSyncMiddleware.startListening({
    actionCreator: search,
    effect: (action, listenerApi) => {
        const {user, query, queryResult} = action.payload;
        if (user) {
            if (query === '') {
                return;
            }
            const currentHistory = localStorageUtil.getSearchHistory(user);

            const historyRecord: HistoryRecord = {
                query,
                timestamp: new Date().toLocaleString(),
                queryResultNumber: queryResult?.length || 0,
                queryResultLink: `/search?query=${query}`,
            };
            const updatedHistory = currentHistory
                ? [historyRecord, ...currentHistory]
                : [historyRecord];
            localStorageUtil.setSearchHistory(user, updatedHistory);
            listenerApi.dispatch(updateHistory(historyRecord));
        }
    },
});

userStateSyncMiddleware.startListening({
    actionCreator: addFavorite,
    effect: (action) => {
        const userName = localStorageUtil.getAuth();
        if (userName) {
            localStorageUtil.addFavorite(userName, action.payload);
        }
    },
});

userStateSyncMiddleware.startListening({
    actionCreator: deleteFavorite,
    effect: (action) => {
        const userName = localStorageUtil.getAuth();
        if (userName) {
            localStorageUtil.deleteFavorite(userName, action.payload);
        }
    },
});

export {userStateSyncMiddleware};
