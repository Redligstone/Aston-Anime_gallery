import {useSearchParams} from 'react-router-dom';
import {useContext} from 'react';
import {ThemeContext} from '../../services/theme/theme-provider';
import {CardList} from '../../components/card-list/card-list';
import {Loader} from '../../components/loader/loader';
import {SearchBar} from '../../components/search-bar/search-bar';
import {useGetCardsQuery} from '../../api/cards-api';
import s from './search-result.module.css';

function SearchResult() {
    const {theme} = useContext(ThemeContext);
    const cn = theme === 'first' ? s.title : s.titleSecond;
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const {data} = useGetCardsQuery({search: query, size: '100'});

    const cardListRender = () => (data ? <CardList cards={data} /> : <Loader />);

    const renderContent = () => {
        if (!query || !query.length) {
            return (
                <>
                    <h4 className={cn}>Explore the collection:</h4>
                    {cardListRender()}
                </>
            );
        }

        if (data && !data.length) {
            return (
                <div className={s.noWrapper}>
                    <h4 className={cn}>No matching anime...</h4>
                </div>
            );
        }

        return (
            <>
                <h4 className={cn}>Search Results:</h4>
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
