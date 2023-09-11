import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from '../../components/header/Header';
import {AppRoute} from '../../routing/AppRoute';
import {Home} from '../home/Home';
import {SearchResult} from '../search/search-result';
import {AboutItem} from '../about-item/aboutItem';
import s from './Main.module.css';

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
                    <Route />
                    <Route />

                    {/* <protectedRoutes>
    
                    </protectedRoutes> */}
                </Routes>
                {/* //suspense */}
            </div>
        </BrowserRouter>
    );
}
export {Main};
