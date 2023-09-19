import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearHistory} from '../../redux/slices/history-slice';
import {getAuthStatusSelector, getUserNameSelector, logOut} from '../../redux/slices/auth-slice';
import {AppRoute} from '../../routing/app-route';
import {localStorageUtil} from '../../utils/local-storage';
import {ThemeContext} from '../../services/theme/theme-provider';
import {Button} from '../button/button';

import s from './header.module.css';

function Header() {
    const authStatus = useSelector(getAuthStatusSelector);
    const userName = useSelector(getUserNameSelector);
    const dispatch = useDispatch();
    const {theme, toggleTheme} = useContext(ThemeContext);

    const handleLogoutClick = () => {
        localStorageUtil.setAuth('');
        dispatch(logOut());
        dispatch(clearHistory());
    };

    return (
        <div className={theme === 'first' ? s.headerFirst : s.headerSecond}>
            <div className={s.container}>
                <Link to="/" className={theme === 'first' ? s.logo : s.logoSecond}>
                    <span className={s.logoText}>Anime</span>
                    <span className={theme === 'first' ? s.logoAccent : s.logoAccentSecond}>
                        Gallery
                    </span>
                </Link>

                {authStatus ? (
                    <div className="nav_buttons">
                        <div>
                            <Link
                                to={AppRoute.Empty}
                                className={`${s.btn} ${theme === 'first' ? s.user : s.userSecond}`}
                            >
                                {userName}
                            </Link>
                            <Link
                                to={AppRoute.Favorites}
                                className={theme === 'first' ? s.btn : s.btnSecond}
                            >
                                Favorites
                            </Link>
                            <Link
                                to={AppRoute.History}
                                className={theme === 'first' ? s.btn : s.btnSecond}
                            >
                                History
                            </Link>
                            <Link
                                to={AppRoute.LogIn}
                                onClick={handleLogoutClick}
                                className={theme === 'first' ? s.btn : s.btnSecond}
                            >
                                Log out
                            </Link>
                            <Button
                                classValue={
                                    theme === 'first' ? 'theme-button-first' : 'theme-button-second'
                                }
                                onClick={toggleTheme}
                            >
                                Theme
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="nav_buttons">
                        <div>
                            <Link
                                to={AppRoute.LogIn}
                                className={theme === 'first' ? s.btn : s.btnSecond}
                            >
                                Log In
                            </Link>
                            <Link
                                to={AppRoute.SignUp}
                                className={theme === 'first' ? s.btn : s.btnSecond}
                            >
                                Sign Up
                            </Link>
                            <Button
                                classValue={
                                    theme === 'first' ? 'theme-button-first' : 'theme-button-second'
                                }
                                onClick={toggleTheme}
                            >
                                Theme
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export {Header};
