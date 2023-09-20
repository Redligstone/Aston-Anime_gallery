import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {useSelector} from 'react-redux';
import {getFavorites} from '../../redux/slices/favorites-slice';
import {Button} from '../../components/button/button';
import {CardList} from '../../components/card-list/card-list';
import {ThemeContext} from '../../services/theme/theme-provider';
import {favoritesClasses} from '../../services/theme/theme-classes/theme-classes';

import s from './favorites.module.css';

function Favorites() {
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);
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
                <div className={favoritesClasses.emptyFavoritesClass(theme)}>
                    Favorites are empty
                </div>
            )}
            <Button
                onClick={backButtonHandler}
                classValue={favoritesClasses.backButtonClass(theme)}
            >
                ← Back
            </Button>
        </div>
    );
}

export {Favorites};
