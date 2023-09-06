import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from '../../components/header/Header';

function Main() {
    return (
        <BrowserRouter>
            <Header />
            {/* //suspense */}
            <Routes>
                <Route />
                <Route />
                <Route />
                <Route />
                <Route />

                {/* <protectedRoutes>

                </protectedRoutes> */}
            </Routes>
            {/* //suspense */}
        </BrowserRouter>
    );
}
export {Main};
