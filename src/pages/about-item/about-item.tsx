import {useNavigate, useParams} from 'react-router-dom';
import {useDataFetching} from '../../hooks/use-data-fetching';
import {Loader} from '../../components/loader/loader';
import {Button} from '../../components/button/button';

import s from './about-item.module.css';

function AboutItem() {
    const navigate = useNavigate();

    const params = useParams();

    const anime = useDataFetching(`https://anime-db.p.rapidapi.com/anime/by-id/${params.id}`);

    const backButtonHandler = () => {
        navigate('/');
    };

    return (
        <div className={s.wrapper}>
            {anime ? (
                <div className={s.container}>
                    <h2 className={s.title}>{anime.title}</h2>
                    <div className={s.description}>
                        <div className={s.imgBlock}>
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
