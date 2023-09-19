import React, {useContext, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {search} from '../../redux/actions/search';
import {getUserNameSelector} from '../../redux/slices/auth-slice';
import {fetchData} from '../../services/fetch-data';
import {ThemeContext} from '../../services/theme/theme-provider';
import {searchBarClasses} from '../../services/theme/theme-classes/theme-classes';

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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const query = (event.target as HTMLFormElement).search.value;
        console.log(query);

        try {
            const response = await fetchData(query);
            console.log(response);

            if (response.data && query !== '') {
                const queryResult = response.data;
                console.log(queryResult, query);
                dispatch(search({user, query, queryResult}));
            }
        } catch (error) {
            console.error('Error:', error);
        }

        navigate(`/search?query=${query}`);
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
