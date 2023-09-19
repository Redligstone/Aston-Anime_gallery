import {User} from '../types/user';
import {HistoryRecord} from '../types/history-record';
import {AnimeWithId} from '../types/anime-data';

export const localStorageUtil = {
    getUser: (key: string): User | null => {
        const user = localStorage.getItem(key);
        if (user) {
            return JSON.parse(user);
        }
        return null;
    },
    setItem: (key: string, value: User): void => {
        const item = JSON.stringify(value);
        localStorage.setItem(key, item);
    },
    setAuth: (name: string): void => localStorage.setItem('auth', name),
    getAuth: (): string | null => localStorage.getItem('auth'),
    setSearchHistory: (key: string, history: HistoryRecord[]): void => {
        const userData = localStorage.getItem(key);
        if (userData) {
            const parsedUserData = JSON.parse(userData);
            localStorage.setItem(key, JSON.stringify({...parsedUserData, history}));
        }
    },
    getSearchHistory: (key: string): HistoryRecord[] => {
        const historyString = localStorage.getItem(key);
        return historyString ? JSON.parse(historyString).history : [];
    },
    addFavorite: (key: string, card: AnimeWithId) => {
        const userData = localStorage.getItem(key);
        if (userData) {
            const parsedUserData = JSON.parse(userData);
            localStorage.setItem(
                key,
                JSON.stringify({...parsedUserData, favorites: [...parsedUserData.favorites, card]})
            );
        }
    },
    deleteFavorite: (key: string, id: string) => {
        const userData = localStorage.getItem(key);
        if (userData) {
            const parsedUserData = JSON.parse(userData);
            const updatedFavorites = parsedUserData.favorites.filter(
                (item: AnimeWithId) => item.id !== id
            );
            localStorage.setItem(
                key,
                JSON.stringify({...parsedUserData, favorites: updatedFavorites})
            );
        }
    },
};
