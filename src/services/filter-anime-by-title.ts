import {AnimeWithId} from '../types/anime-data';

export const filterAnimeByTitle = (userInput: string, data: AnimeWithId[]) =>
    data.filter((anime) => anime.title.toLowerCase().startsWith(userInput.toLowerCase()));
