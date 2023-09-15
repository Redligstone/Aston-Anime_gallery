import {useGetCardsQuery} from '../../api/cards-api';
import {CardList} from '../../components/card-list/card-list';
import {Loader} from '../../components/loader/loader';
import {SearchBar} from '../../components/search-bar/search-bar';
import s from './home.module.css';

function Home() {
    const {data} = useGetCardsQuery({search: '', size: '5'});

    // const [fetchData] = useLazyGetCardsQuery();
    // const response = fetchData({search: '', size: '5'});

    // // if (data) {
    // //     const sortedAnime = [...data].sort((a, b) => b.ranking - a.ranking);
    // //     topRatedAnime = sortedAnime.slice(0, 5);
    // // }
    console.log(data);

    return (
        <div className={s.container}>
            <SearchBar />
            {data ? (
                <div className={s.card_container}>
                    <h4 className={s.title}>Top 5 rated:</h4>
                    <CardList cards={data} />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export {Home};
