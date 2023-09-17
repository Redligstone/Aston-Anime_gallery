import {useSelector} from 'react-redux';
import {getFavorites} from '../../redux/slices/favorites-slice';
import {AnimeWithId} from '../../types/anime-data';
import {Card} from '../card/card';
import s from './card-list.module.css';

type CardListProps = {
    cards: AnimeWithId[] | null;
};

function CardList({cards}: CardListProps) {
    const favorites = useSelector(getFavorites);

    const isFavoriteCheck = (id: string) => !!favorites.find((item) => item.id === id);

    const cardList = cards?.map((item) => (
        <li key={item.id}>
            <Card data={item} isFavorite={isFavoriteCheck(item.id)} />
        </li>
    ));

    return <ul className={s.wrapper}>{cardList}</ul>;
}
export {CardList};
