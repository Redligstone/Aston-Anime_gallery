import {NavigateFunction} from 'react-router-dom';
import {Dispatch} from 'redux';
import {logIn} from '../redux/slices/auth-slice';
import {setHistory} from '../redux/slices/history-slice';
import {AppRoute} from '../routing/app-route';
import {User} from '../types/user';

export function handleLogIn(userInfo: User, dispatch: Dispatch, navigate: NavigateFunction) {
    dispatch(logIn(userInfo));
    dispatch(setHistory(userInfo?.history));
    navigate(AppRoute.Empty);
}
