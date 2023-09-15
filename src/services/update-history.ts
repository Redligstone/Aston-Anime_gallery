import {HistoryRecord} from '../types/history-record';
import {AnimeWithId} from '../types/anime-data';
import {localStorageUtil} from '../utils/local-storage';

export const updateHistory = (user: string, query: string, queryResult: AnimeWithId[] | null) => {
    if (query === '') {
        return;
    }

    const currentHistory = localStorageUtil.getSearchHistory(user);

    const historyRecord: HistoryRecord = {
        query,
        timestamp: new Date().toLocaleString(),
        queryResultNumber: queryResult?.length || 0,
        queryResultLink: `../search?query=${query}`,
    };

    const updatedHistory = [historyRecord, ...currentHistory];
    localStorageUtil.setSearchHistory(user, updatedHistory);
};
