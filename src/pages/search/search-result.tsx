import {useLocation} from 'react-router';
import {CardList} from '../../components/card-list/Card-List';
import {Loader} from '../../components/loader/loader';
import {SearchBar} from '../../components/search-bar/search-bar';
import {useGetCardsQuery} from '../../api/cardsApi';

import s from './search-result.module.css';

function SearchResult() {
    const location = useLocation();
    const userQuery = new URLSearchParams(location.search).get('query');
    console.log(userQuery);
    const {data} = useGetCardsQuery({search: userQuery!, size: '10'});

    const renderContent = () => {
        if (!userQuery || !userQuery.length) {
            return (
                <>
                    <h4 className={s.title}>Explore the collection:</h4>
                    {data ? <CardList cards={data} /> : <Loader />}
                </>
            );
        }

        if (data && !data.length) {
            return <h4 className={s.title}>No matching anime...</h4>;
        }

        return (
            <>
                <h4 className={s.title}>Search Results:</h4>
                {data ? <CardList cards={data} /> : <Loader />}
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
