import {useSearchParams} from 'react-router-dom';
import {CardList} from '../../components/card-list/card-list';
import {Loader} from '../../components/loader/loader';
import {SearchBar} from '../../components/search-bar/search-bar';
import {useGetCardsQuery} from '../../api/cards-api';
import s from './search-result.module.css';

function SearchResult() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const {data} = useGetCardsQuery({search: query, size: '10'});

    const cardListRender = () => (data ? <CardList cards={data} /> : <Loader />);

    const renderContent = () => {
        if (!query || !query.length) {
            return (
                <>
                    <h4 className={s.title}>Explore the collection:</h4>
                    {cardListRender()}
                </>
            );
        }

        if (data && !data.length) {
            return <h4 className={s.title}>No matching anime...</h4>;
        }

        return (
            <>
                <h4 className={s.title}>Search Results:</h4>
                {cardListRender()}
            </>
        );
    };

    return (
        <div>
            <SearchBar />
            <div className={s.card_container}>{renderContent()}</div>
        </div>
    );
}

export {SearchResult};
