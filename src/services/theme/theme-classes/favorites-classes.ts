import s from '../../../pages/favorites/favorites.module.css';

export const favoritesClasses = {
    emptyFavoritesClass: (theme: string) =>
        theme === 'first' ? s.emptyFavorites : s.emptyFavoritesSecond,
    backButtonClass: (theme: string) =>
        theme === 'first' ? 'default-button' : 'default-button-second',
};
