import {HistoryRecord} from './history-record';
import {AnimeWithId} from './anime-data';

export type User = {
    userName: string;
    password: string;
    favorites: AnimeWithId[];
    history: HistoryRecord[];
};
