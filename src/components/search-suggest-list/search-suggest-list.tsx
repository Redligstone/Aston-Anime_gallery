import {Link} from 'react-router-dom';
import {AnimeWithId} from '../../types/anime-data';
import s from './search-suggest-list.module.css';

type SearchResultsListProps = {
    results: AnimeWithId[] | null;
};

function SearchResultsList({results}: SearchResultsListProps) {
    return (
        <div className={s.suggstList}>
            {results &&
                results.map((result) => (
                    <Link to={`/about-item/${result.id}`} className={s.dropItem} key={result.id}>
                        {result.title}
                    </Link>
                ))}
        </div>
    );
}

export {SearchResultsList};
