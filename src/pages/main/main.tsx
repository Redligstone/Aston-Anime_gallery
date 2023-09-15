import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from '../../components/header/header';
import {AppRoute} from '../../routing/app-route';
import {SearchResult} from '../search/search-result';
import {AboutItem} from '../about-item/about-item';
import {Home} from '../home/home';
import {SignUp} from '../sign-up/sign-up';
import {LogIn} from '../log-in/log-in';

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

                    {/* <protectedRoutes>
    
                    </protectedRoutes> */}
                </Routes>
                {/* //suspense */}
            </div>
        </BrowserRouter>
    );
}
export {Main};
