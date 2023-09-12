import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AnimeData, AnimeWithId} from '../types/anime-data';
import {Meta} from '../types/meta';

import {renameIdsInData} from '../services/rename-ids-in-data';
import {errorHandle} from '../services/error-handler';

const BASE_URL = 'https://anime-db.p.rapidapi.com/';
const LIST_URL = 'anime';
const HEADERS = {
    'X-RapidAPI-Key': '49fcafd200msh89fd2520eebf945p118f59jsnb088872a2a85',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
};

const params = {
    page: '1',
    genres: 'Fantasy,Drama',
    sortBy: 'ranking',
    sortOrder: 'asc',
};

export type ResponseType = {
    data: AnimeData[];
    meta: Meta;
};

type ExtraParams = {
    search?: string | null;
    size?: string;
};

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getCards: builder.query<AnimeWithId[], ExtraParams | void>({
            query: (extraParams: ExtraParams) => ({
                url: LIST_URL,
                method: 'GET',
                headers: HEADERS,
                params: {...params, ...extraParams},
            }),
            transformResponse: (response: ResponseType): AnimeWithId[] =>
                renameIdsInData(response.data),
            transformErrorResponse: errorHandle,
        }),
    }),
});
export const {useGetCardsQuery, useLazyGetCardsQuery} = cardsApi;
