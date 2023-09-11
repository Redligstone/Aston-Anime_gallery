import {AnimeWithId} from '../../types/animeData';
import {Card} from '../card/card';
import s from './Card-list.module.css';

type CardListProps = {
    cards: AnimeWithId[] | null;
};

function CardList({cards}: CardListProps) {
    const cardList = cards?.map((item) => (
        <li key={item.id}>
            <Card data={item} />
        </li>
    ));

    return <ul className={s.wrapper}>{cardList}</ul>;
}
export {CardList};
