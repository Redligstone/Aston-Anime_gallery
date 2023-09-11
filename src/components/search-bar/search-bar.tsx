import React, {useRef} from 'react';
import {useLocation, useNavigate} from 'react-router';
import s from './search-bar.module.css';

function SearchBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const userQuery = new URLSearchParams(location.search);
    const currentQuery = userQuery.get('query') || '';

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const query = (event.target as HTMLFormElement).search.value;
        navigate(`/search/?query=${query}`);
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
                <button type="submit" className="btn btn-secondary my-2 my-sm-0">
                    Search
                </button>
            </form>
        </div>
    );
}

export {SearchBar};
