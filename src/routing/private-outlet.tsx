import {Navigate, Outlet} from 'react-router-dom';
import {localStorageUtil} from '../utils/local-storage';

function PrivateOutlet() {
    const isAuth = localStorageUtil.getAuth();

    return isAuth ? <Outlet /> : <Navigate to="/anime-list/login" />;
}

export {PrivateOutlet};
