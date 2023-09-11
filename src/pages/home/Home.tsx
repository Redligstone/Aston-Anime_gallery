// import {SearchBar} from '../../components/search-bar/search-bar';

import {useGetCardsQuery} from '../../api/cardsApi';
import {CardList} from '../../components/card-list/Card-List';
import {Loader} from '../../components/loader/loader';
import {SearchBar} from '../../components/search-bar/search-bar';
import s from './home.module.css';

const TOP_COUNT = '5';

function Home() {
    const {data} = useGetCardsQuery({search: '', size: TOP_COUNT});
    return (
        <div className={s.container}>
            <SearchBar />
            {data ? (
                <div className={s.card_container}>
                    {data && (
                        <>
                            <h4 className={s.title}>Top 5 rated:</h4>
                            <CardList cards={data} />
                        </>
                    )}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export {Home};
