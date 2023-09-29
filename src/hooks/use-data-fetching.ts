import {useEffect, useState} from 'react';
import {AnimeData} from '../types/anime-data';
import {ErrorType} from '../types/error';
import {errorHandle} from '../services/error-handler';

type OptionsType = {
    method: string;
    headers: {
        'X-RapidAPI-Key': string;
        'X-RapidAPI-Host': string;
    };
};
const apiKey = process.env.REACT_APP_EHB_ACCESS_KEY || 'default_api_key';

const options: OptionsType = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
    },
};

const useDataFetching = (url: string): AnimeData | null => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                setData(json);
            } catch (error) {
                errorHandle(error as ErrorType);
            }
        };
        fetchData();
    }, [url]);
    return data;
};

export {useDataFetching};
