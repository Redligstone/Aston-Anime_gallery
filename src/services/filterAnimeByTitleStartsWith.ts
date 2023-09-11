import {AnimeWithId} from '../types/anime-data';

export const filterAnimeByTitleStartsWith = (
    userInput: string | null,
    data: AnimeWithId[] | null
) => {
    if (!userInput || !data) {
        return null;
    }

    return data.filter((anime) => anime.title.toLowerCase().startsWith(userInput.toLowerCase()));
};
