import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {User} from '../types/user';
import {logIn} from '../redux/slices/auth-slice';
import {setFavorites} from '../redux/slices/favorites-slice';
import {setHistory} from '../redux/slices/history-slice';
import {AppRoute} from '../routing/app-route';

type UserInfo = {
    userName: string;
    password: string;
};

type Hooks = {
    navigate: ReturnType<typeof useNavigate>;
    dispatch: ReturnType<typeof useDispatch>;
};

export function handleSignUp({navigate, dispatch}: Hooks, userInfo: UserInfo) {
    const user = {...userInfo, history: [], favorites: []};

    dispatch(logIn(user));
    dispatch(setFavorites(user.favorites));
    dispatch(setHistory(user.history));
    navigate(AppRoute.Empty);
}

export function handleLogIn({navigate, dispatch}: Hooks, userInfo: User) {
    dispatch(logIn(userInfo));
    dispatch(setHistory(userInfo?.history));
    dispatch(setFavorites(userInfo?.favorites));
    navigate(AppRoute.Empty);
}
