import React, {useRef} from 'react';
import {useNavigate, useParams} from 'react-router';
import s from './search-bar.module.css';

function SearchBar() {
    const navigate = useNavigate();
    const {query} = useParams();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newQuery = inputRef.current?.value || '';
        navigate(`/search/${newQuery}`);
    };

    return (
        <div>
            <form className={s.wrapper} onSubmit={handleSubmit}>
                <input
                    type="search"
                    defaultValue={query}
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
