import React, {useRef} from 'react';
import {useLocation, useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {search} from '../../redux/actions/search';
import {getUserNameSelector} from '../../redux/slices/auth-slice';
import {useLazyGetCardsQuery} from '../../api/cards-api';

import s from './search-bar.module.css';

function SearchBar() {
    // нужно апдейтнуть способ передачи queryResult в сёрч и потом в мидлвару.
    // убрать получаемую дату из компонента, она не нужна здесь
    const [fetchData] = useLazyGetCardsQuery();
    const user = useSelector(getUserNameSelector);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const userQuery = new URLSearchParams(location.search);
    const currentQuery = userQuery.get('query') || '';

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const query = (event.target as HTMLFormElement).search.value;
        const response = await fetchData({search: inputRef.current?.value});
        const queryResult = response.data;

        // console.log(queryResult);

        dispatch(search({user, query, queryResult}));

        navigate(`/search?query=${query}`);
    };

    return (
        <div>
            <form className={s.wrapper} onSubmit={handleSubmit}>
                <input
                    type="search"
                    defaultValue={currentQuery}
                    ref={inputRef}
                    className={s.input}
                    placeholder="Search..."
                    name="search"
                    autoComplete="off"
                />
                <button type="submit" className={s.searchButton}>
                    Search
                </button>
            </form>
        </div>
    );
}

export {SearchBar};
