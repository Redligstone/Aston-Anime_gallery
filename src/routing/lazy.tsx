import {lazy} from 'react';

export const HomePage = lazy(() =>
    import('../pages/home/home').then((module) => ({default: module.Home}))
);

export const SearchPage = lazy(() =>
    import('../pages/search/search-result').then((module) => ({
        default: module.SearchResult,
    }))
);

export const AboutItemPage = lazy(() =>
    import('../pages/about-item/about-item').then((module) => ({
        default: module.AboutItem,
    }))
);

export const LogInPage = lazy(() =>
    import('../pages/log-in/log-in').then((module) => ({
        default: module.LogIn,
    }))
);

export const SignUpPage = lazy(() =>
    import('../pages/sign-up/sign-up').then((module) => ({
        default: module.SignUp,
    }))
);

export const FavoritesPage = lazy(() =>
    import('../pages/favorites/favorites').then((module) => ({
        default: module.Favorites,
    }))
);

export const HistoryPage = lazy(() =>
    import('../pages/history/history').then((module) => ({
        default: module.History,
    }))
);
