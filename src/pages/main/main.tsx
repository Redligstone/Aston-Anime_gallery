import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from '../../components/header/header';
import {AppRoute} from '../../routing/app-route';
import {SearchResult} from '../search/search-result';
import {AboutItem} from '../about-item/about-item';
import {Home} from '../home/home';
import {SignUp} from '../sign-up/sign-up';
import {LogIn} from '../log-in/log-in';
import {History} from '../history/history';
import {PrivateOutlet} from '../../routing/private-outlet';
import {Favorites} from '../favorites/favorites';

import s from './main.module.css';

function Main() {
    return (
        <BrowserRouter>
            <Header />
            <div className={s.wrapper}>
                {/* //suspense */}
                <Routes>
                    <Route path={AppRoute.Empty} element={<Home />} />
                    <Route path={AppRoute.Search} element={<SearchResult />} />
                    <Route path={AppRoute.AboutItem} element={<AboutItem />} />
                    <Route path={AppRoute.SignUp} element={<SignUp />} />
                    <Route path={AppRoute.LogIn} element={<LogIn />} />

                    <Route path={AppRoute.History} element={<PrivateOutlet />}>
                        <Route index element={<History />} />
                    </Route>

                    <Route path={AppRoute.Favorites} element={<PrivateOutlet />}>
                        <Route index element={<Favorites />} />
                    </Route>
                </Routes>
                {/* //suspense */}
            </div>
        </BrowserRouter>
    );
}

export {Main};
