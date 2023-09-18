import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getFavorites} from '../../redux/slices/favorites-slice';
import {Button} from '../../components/button/button';
import {CardList} from '../../components/card-list/card-list';

import s from './favorites.module.css';

function Favorites() {
    const navigate = useNavigate();

    const favorites = useSelector(getFavorites);

    const backButtonHandler = () => {
        navigate('/');
    };

    return (
        <div className={s.container}>
            {favorites.length ? (
                <div className="main-container">
                    <div className="card-container">
                        {favorites && <CardList cards={favorites} />}
                    </div>
                </div>
            ) : (
                <div className={s.emptyFavorites}>Favorites are empty</div>
            )}
            <Button onClick={backButtonHandler} classValue="default-button">
                ← Back
            </Button>
        </div>
    );
}

export {Favorites};
