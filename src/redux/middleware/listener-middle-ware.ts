import {createListenerMiddleware} from '@reduxjs/toolkit';
import {logIn} from '../slices/auth-slice';
import {localStorageUtil} from '../../utils/local-storage';
import {init} from '../actions/init';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: init,
    effect: (action, listenerApi) => {
        const userName = localStorageUtil.getAuth();
        if (userName) {
            const userInfo = localStorageUtil.getUser(userName);
            listenerApi.dispatch(logIn(userInfo));
        }
    },
});

listenerMiddleware.startListening({
    actionCreator: logIn,
    effect: (action) => {
        localStorageUtil.setItem(action.payload.userName, action.payload);
        localStorageUtil.setAuth(action.payload.userName);
    },
});

export {listenerMiddleware};
