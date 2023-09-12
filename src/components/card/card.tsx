import {useNavigate} from 'react-router';
import {AnimeWithId} from '../../types/anime-data';
import s from './card.module.css';

type CardProps = {
    data: AnimeWithId;
};

function Card({data}: CardProps) {
    const {id, title, image, ranking, episodes} = data;
    const navigate = useNavigate();

    const handleDetailedPageClick = (idAnime: string) => {
        navigate(`/about-item/${idAnime}`, {replace: true});
    };
    return (
        <article className={s.card}>
            <div className={s.cardInner}>
                <div className={s.imgWrapper}>
                    <img className={s.img} src={image} alt={title} />
                </div>
                <div className={s.cardBody}>
                    <div className={s.cardHeader}>
                        <div className={s.ranking}>
                            <span className={s.rankingStar}>★</span>
                            <span className={s.rankingText}>{ranking}</span>
                        </div>
                        <div className={s.episodes}>{episodes} episodes</div>
                    </div>
                    <h2 className={s.title}>{title}</h2>
                </div>
            </div>
            <button type="button" className={s.viewBtn} onClick={() => handleDetailedPageClick(id)}>
                View more
            </button>
        </article>
    );
}

export {Card};
