import {useContext} from 'react';
import {useGetCardsQuery} from '../../api/cards-api';
import {CardList} from '../../components/card-list/card-list';
import {Loader} from '../../components/loader/loader';
import {SearchBar} from '../../components/search-bar/search-bar';
import {ThemeContext} from '../../services/theme/theme-provider';
import s from './home.module.css';

function Home() {
    const {data} = useGetCardsQuery({search: '', size: '5'});
    const {theme} = useContext(ThemeContext);

    return (
        <div className={s.container}>
            <SearchBar />
            {data ? (
                <div className={s.cardContainer}>
                    <h4 className={theme === 'first' ? s.title : s.titleSecond}>Top 5 rated:</h4>
                    <CardList cards={data} />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export {Home};
