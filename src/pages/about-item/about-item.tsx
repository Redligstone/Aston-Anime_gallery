import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useDataFetching} from '../../hooks/use-data-fetching';
import {getAuthStatusSelector} from '../../redux/slices/auth-slice';
import {Loader} from '../../components/loader/loader';
import {Button} from '../../components/button/button';
import {FavoriteSvg} from '../../components/favorite-svg/favorite-svg';
import {addFavorite, deleteFavorite, getFavorites} from '../../redux/slices/favorites-slice';
import {AppRoute} from '../../routing/app-route';

import s from './about-item.module.css';

function AboutItem() {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favorites = useSelector(getFavorites);
    const authStatus = useSelector(getAuthStatusSelector);

    const params = useParams();

    const anime = useDataFetching(`https://anime-db.p.rapidapi.com/anime/by-id/${params.id}`);

    const backButtonHandler = () => {
        navigate('/');
    };

    const handleLikeClick = (idAnime: string | undefined) => {
        if (isFavorite) {
            dispatch(deleteFavorite(idAnime));
            setIsFavorite(false);
            return;
        }
        dispatch(
            addFavorite({
                id: idAnime,
                title: anime?.title,
                image: anime?.image,
                ranking: anime?.ranking,
                episodes: anime?.episodes,
            })
        );
        setIsFavorite(true);
    };

    useEffect(() => {
        if (anime) {
            setIsFavorite(!!favorites.find((item) => item.id === params.id));
        } else {
            navigate(AppRoute.Error);
        }
    }, [anime, params.id, favorites, navigate]);

    return (
        <div className={s.wrapper}>
            {anime ? (
                <div className={s.container}>
                    <h2 className={s.title}>{anime.title}</h2>
                    <div className={s.description}>
                        <div className={s.imgBlock}>
                            {authStatus ? (
                                <button
                                    className={`${s.favoriteButton} ${
                                        isFavorite ? s.favorite : ''
                                    }`}
                                    type="button"
                                    onClick={() => handleLikeClick(params.id)}
                                >
                                    <FavoriteSvg color={isFavorite ? 'red' : 'grey'} />
                                </button>
                            ) : null}
                            <img src={anime.image} alt="" />
                        </div>
                    </div>

                    <div className={s.info}>
                        <p className={s.info_item}>
                            Alternative Titles:
                            <span>{` ${anime.alternativeTitles}`}</span>
                        </p>
                        <p className={s.info_item}>
                            Type:
                            <span>{` ${anime.type}`}</span>
                        </p>
                        <p className={s.info_item}>
                            Episodes:
                            <span>{` ${anime.episodes}`}</span>
                        </p>
                        <p className={s.info_item}>
                            Status:
                            <span>{` ${anime.status}`}</span>
                        </p>
                        <p className={s.info_item}>
                            Genres:
                            <span>{` ${anime.genres}`}</span>
                        </p>
                        <p className={s.info_item}>
                            Ranking:
                            <span>{` ${anime.ranking}`}</span>
                        </p>
                    </div>

                    <div className={s.synopsis}>
                        <div className={s.synopsisTitle}>Synopsis: </div>
                        <div>
                            <span>{` ${anime.synopsis}`}</span>
                        </div>
                    </div>

                    <Button onClick={backButtonHandler} classValue="about-item-default-btn">
                        ← Back
                    </Button>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export {AboutItem};
