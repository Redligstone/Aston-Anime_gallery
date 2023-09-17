import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {clearHistory} from '../../redux/slices/history-slice';
import {getAuthStatusSelector, getUserNameSelector, logOut} from '../../redux/slices/auth-slice';
import {AppRoute} from '../../routing/app-route';
import {localStorageUtil} from '../../utils/local-storage';

import s from './header.module.css';

function Header() {
    const authStatus = useSelector(getAuthStatusSelector);
    const userName = useSelector(getUserNameSelector);
    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        localStorageUtil.setAuth('');
        dispatch(logOut());
        dispatch(clearHistory());
    };

    return (
        <div className={s.header}>
            <div className={s.container}>
                <Link to="/" className={s.logo}>
                    <span className={s.logoText}>Anime</span>
                    <span className={s.logoAccent}>Gallery</span>
                </Link>

                {authStatus ? (
                    <div className="nav_buttons">
                        <div>
                            <span className={`${s.btn} ${s.user}`}>{userName}</span>
                            <Link to={AppRoute.Favorites} className={`${s.btn} `}>
                                Favorites
                            </Link>
                            <Link to={AppRoute.History} className={`${s.btn}`}>
                                History
                            </Link>
                            <Link
                                to={AppRoute.LogIn}
                                onClick={handleLogoutClick}
                                className={`${s.btn}`}
                            >
                                <button className={s.btn} type="submit">
                                    Log Out
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="nav_buttons">
                        <div>
                            <Link to={AppRoute.LogIn} className={`${s.btn}`}>
                                Log In
                            </Link>
                            <Link to={AppRoute.SignUp} className={`${s.btn}`}>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export {Header};
