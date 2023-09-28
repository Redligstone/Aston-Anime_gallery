import React, {useContext, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {debounce} from 'lodash';
import {search} from '../../redux/actions/search';
import {getUserNameSelector} from '../../redux/slices/auth-slice';
import {fetchData} from '../../services/fetch-data';
import {ThemeContext} from '../../services/theme/theme-provider';
import {searchBarClasses} from '../../services/theme/theme-classes/theme-classes';
import {FormEventWithSearch} from '../../types/search';

import s from './search-bar.module.css';

function SearchBar() {
    const user = useSelector(getUserNameSelector);
    const {theme} = useContext(ThemeContext);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const userQuery = new URLSearchParams(location.search);
    const currentQuery = userQuery.get('query') || '';

    const inputRef = useRef<HTMLInputElement>(null);

    const debouncedSubmit = debounce(async (query: string) => {
        try {
            const response = await fetchData(query);

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
                />
                <button type="submit" className={searchBarClasses.buttonClass(theme)}>
                    Search
                </button>
            </form>
        </div>
    );
}

export {SearchBar};
