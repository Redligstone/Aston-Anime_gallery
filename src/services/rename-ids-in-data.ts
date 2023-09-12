import {AnimeData, AnimeWithId} from '../types/anime-data';

const renameIdsInData = (data: AnimeData[]): AnimeWithId[] =>
    data.map((item) => {
        const {_id, ...rest} = item;
        return {...rest, id: _id};
    });

export {renameIdsInData};
