import cardS from '../../../components/card/card.module.css';
import signUpS from '../../../pages/sign-up/sign-up.module.css';
import searchS from '../../../components/search-bar/search-bar.module.css';
import logInS from '../../../pages/log-in/log-in.module.css';
import historyS from '../../../pages/history/history.module.css';
import headerS from '../../../components/header/header.module.css';
import favoriteS from '../../../pages/favorites/favorites.module.css';

export const cardStyles = {
    rankingTextClass: (theme: string) =>
        theme === 'first' ? cardS.rankingText : cardS.rankingTextSecond,
    titleClass: (theme: string) => (theme === 'first' ? cardS.title : cardS.titleSecond),
    viewBtnClass: (theme: string) => (theme === 'first' ? cardS.viewBtn : cardS.viewBtnSecond),
};

export const signUpClasses = {
    titleClass: (theme: string) => (theme === 'first' ? signUpS.title : signUpS.titleSecond),
    labelClass: (theme: string) => (theme === 'first' ? signUpS.label : signUpS.labelSecond),
    buttonClass: (theme: string) => (theme === 'first' ? signUpS.btn : signUpS.btnSecond),
};

export const searchBarClasses = {
    inputClass: (theme: string) => (theme === 'first' ? searchS.input : searchS.inputSecond),
    buttonClass: (theme: string) =>
        theme === 'first' ? searchS.searchButton : searchS.searchButtonSecond,
};

export const logInClasses = {
    titleClass: (theme: string) => (theme === 'first' ? logInS.title : logInS.titleSecond),
    labelClass: (theme: string) => (theme === 'first' ? logInS.label : logInS.labelSecond),
    buttonClass: (theme: string) => (theme === 'first' ? logInS.btn : logInS.btnSecond),
};

export const historyClasses = {
    headerClass: (theme: string) => (theme === 'first' ? historyS.header : historyS.headerSecond),
    tableClass: (theme: string) => (theme === 'first' ? historyS.table : historyS.tableSecond),
    buttonClass: (theme: string) =>
        theme === 'first' ? 'view-default-button' : 'view-default-button-second',
    backButtonClass: (theme: string) =>
        theme === 'first' ? 'default-button' : 'default-button-second',
};

export const headerClasses = {
    headerClass: (theme: string) =>
        theme === 'first' ? headerS.headerFirst : headerS.headerSecond,
    logoClass: (theme: string) => (theme === 'first' ? headerS.logo : headerS.logoSecond),
    logoAccentClass: (theme: string) =>
        theme === 'first' ? headerS.logoAccent : headerS.logoAccentSecond,
    userClass: (theme: string) => (theme === 'first' ? headerS.user : headerS.userSecond),
    btnClass: (theme: string) => (theme === 'first' ? headerS.btn : headerS.btnSecond),
    themeButtonClass: (theme: string) =>
        theme === 'first' ? 'theme-button-first' : 'theme-button-second',
};

export const favoritesClasses = {
    emptyFavoritesClass: (theme: string) =>
        theme === 'first' ? favoriteS.emptyFavorites : favoriteS.emptyFavoritesSecond,
    backButtonClass: (theme: string) =>
        theme === 'first' ? 'default-button' : 'default-button-second',
};
