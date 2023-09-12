import {User} from '../types/user';
// import {HistoryRecord} from '../types/history-record';
// import {AnimeWithId} from '../types/anime-data';

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
};
