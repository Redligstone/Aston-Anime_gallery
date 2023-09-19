import {useNavigate} from 'react-router';
import {useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, deleteFavorite} from '../../redux/slices/favorites-slice';
import {AnimeWithId} from '../../types/anime-data';
import {getAuthStatusSelector} from '../../redux/slices/auth-slice';
import {FavoriteSvg} from '../favorite-svg/favorite-svg';
import {ThemeContext} from '../../services/theme/theme-provider';
import {cardStyles} from '../../services/theme/theme-classes/card-classes';

import s from './card.module.css';

type CardProps = {
    data: AnimeWithId;
    isFavorite: boolean;
};

function Card({data, isFavorite}: CardProps) {
    const {id, title, image, ranking, episodes} = data;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {theme} = useContext(ThemeContext);

    const authStatus = useSelector(getAuthStatusSelector);

    const handleDetailedPageClick = (idAnime: string) => {
        navigate(`/about-item/${idAnime}`, {replace: true});
    };

    const handleLikeClick = (idAnime: string) => {
        if (isFavorite) {
            dispatch(deleteFavorite(idAnime));
            return;
        }
        dispatch(addFavorite(data));
    };

    return (
        <article className={s.card}>
            {authStatus ? (
                <button
                    className={`${s.favoriteButton} ${isFavorite ? s.favorite : ''}`}
                    type="button"
                    onClick={() => handleLikeClick(id)}
                >
                    <FavoriteSvg color={isFavorite ? 'red' : 'grey'} />
                </button>
            ) : null}

            <div className={s.cardInner}>
                <div className={s.imgWrapper}>
                    <img className={s.img} src={image} alt={title} />
                </div>
                <div className={s.cardBody}>
                    <div className={s.cardHeader}>
                        <div className={s.ranking}>
                            <span className={s.rankingStar}>★</span>
                            <span className={cardStyles.rankingTextClass(theme)}>{ranking}</span>
                        </div>
                        <div className={s.episodes}>{episodes} episodes</div>
                    </div>
                    <h2 className={cardStyles.titleClass(theme)}>{title}</h2>
                </div>
            </div>
            <button
                type="button"
                className={cardStyles.viewBtnClass(theme)}
                onClick={() => handleDetailedPageClick(id)}
            >
                View more
            </button>
        </article>
    );
}

export {Card};
