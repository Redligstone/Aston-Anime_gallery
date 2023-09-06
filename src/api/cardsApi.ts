// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AnimeData} from '../types/animeData';
import {Meta} from '../types/meta';

const BASE_URL = 'https://anime-db.p.rapidapi.com/';
const LIST_URL = 'anime';
const HEADERS = {
    'X-RapidAPI-Key': '49fcafd200msh89fd2520eebf945p118f59jsnb088872a2a85',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
};

const params = {
    page: '1',
    size: '50',
    sortBy: 'ranking',
    sortOrder: 'asc',
};

type ResponseType = {
    data: AnimeData[];
    meta: Meta;
};

type ExtraParams = {
    search?: string;
    size?: string;
};
