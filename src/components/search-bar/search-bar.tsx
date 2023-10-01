import React, {useContext, useRef, useState} from 'react';
import {useLocation, useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {debounce} from 'lodash';
import {useLazyGetCardsQuery} from '../../api/cards-api';
import {search} from '../../redux/actions/search';
import {getUserNameSelector} from '../../redux/slices/auth-slice';
import {fetchDataRequest} from '../../services/fetch-data-request';
import {ThemeContext} from '../../services/theme/theme-provider';
import {searchBarClasses} from '../../services/theme/theme-classes/theme-classes';
import {FormEventWithSearch} from '../../types/search';
import {AnimeWithId} from '../../types/anime-data';
import {SearchResultsList} from '../search-suggest-list/search-suggest-list';

import s from './search-bar.module.css';

function SearchBar() {
    const [fetchData] = useLazyGetCardsQuery();
    const [suggests, setSuggests] = useState<AnimeWithId[] | null>(null);
    const user = useSelector(getUserNameSelector);
    const {theme} = useContext(ThemeContext);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const userQuery = new URLSearchParams(location.search);
    const currentQuery = userQuery.get('query') || '';

    const inputRef = useRef<HTMLInputElement>(null);
    let isSubmitInvoked = false;

    const debouncedDataFetch = debounce(async () => {
        if (isSubmitInvoked) {
            return;
        }
        if (inputRef.current?.value) {
            const response = await fetchData({search: inputRef.current?.value, size: '5'});
            setSuggests(response.data || null);
        } else {
            setSuggests(null);
        }
    }, 700);

    const debouncedSubmit = debounce(async (query: string) => {
        try {
            const response = await fetchDataRequest(query);

            if (response.data && query !== '') {
                const queryResult = response.data;
                dispatch(search({user, query, queryResult}));
            }
        } catch (error) {
            console.error('Error:', error);
        }

        navigate(`/search?query=${query}`);
    }, 500);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const typedEvent = event as FormEventWithSearch;
        const query = typedEvent.target.search.value;
        debouncedSubmit(query);
        isSubmitInvoked = true;
        setSuggests(null);
    };

    return (
        <div>
            <form className={s.wrapper} onSubmit={handleSubmit}>
                <input
                    type="search"
                    defaultValue={currentQuery}
                    ref={inputRef}
                    className={searchBarClasses.inputClass(theme)}
                    placeholder="Search..."
                    name="search"
                    autoComplete="off"
                    onChange={debouncedDataFetch}
                />
                <button type="submit" className={searchBarClasses.buttonClass(theme)}>
                    Search
                </button>
            </form>
            {suggests && <SearchResultsList results={suggests} />}
        </div>
    );
}

export {SearchBar};
