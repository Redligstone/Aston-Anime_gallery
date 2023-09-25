import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Suspense, useContext} from 'react';
import {Header} from '../../components/header/header';
import {AppRoute} from '../../routing/app-route';
import {ThemeContext} from '../../services/theme/theme-provider';
import {PrivateOutlet} from '../../routing/private-outlet';
import {Loader} from '../../components/loader/loader';
import {
    AboutItemPage,
    FavoritesPage,
    HistoryPage,
    LogInPage,
    HomePage,
    SearchPage,
    SignUpPage,
} from '../../routing/lazy';

import s from './main.module.css';

function Main() {
    const {theme} = useContext(ThemeContext);

    return (
        <BrowserRouter>
            <>
                <Header />
                <div className={theme === 'first' ? s.wrapper : s.wrapperSecond}>
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path={AppRoute.Empty} element={<HomePage />} />
                            <Route path={AppRoute.Search} element={<SearchPage />} />
                            <Route path={AppRoute.AboutItem} element={<AboutItemPage />} />
                            <Route path={AppRoute.SignUp} element={<SignUpPage />} />
                            <Route path={AppRoute.LogIn} element={<LogInPage />} />

                            <Route path={AppRoute.History} element={<PrivateOutlet />}>
                                <Route index element={<HistoryPage />} />
                            </Route>

                            <Route path={AppRoute.Favorites} element={<PrivateOutlet />}>
                                <Route index element={<FavoritesPage />} />
                            </Route>
                        </Routes>
                    </Suspense>
                </div>
            </>
        </BrowserRouter>
    );
}

export {Main};
