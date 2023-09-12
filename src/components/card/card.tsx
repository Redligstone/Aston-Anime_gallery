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
            <div>
                <div className={s.img_wrp}>
                    <img className={s.img} src={image} alt={title} />
                </div>

                <div className={s.card_body}>
                    <div className={s.card_characteristics}>
                        <div className={s.ranking}>
                            {/* <StarSvg /> */}
                            <div>{ranking}</div>
                        </div>
                        <div className={s.episodes}>{episodes} episodes</div>
                    </div>
                    <h2 className={s.title}>{title}</h2>
                </div>
            </div>
            <button
                type="button"
                className={`${s.view_btn}`}
                onClick={() => handleDetailedPageClick(id)}
            >
                View more
            </button>
        </article>
    );
}

export {Card};
