import {useContext} from 'react';
import {ThemeContext} from '../../services/theme/theme-provider';

import s from './error.module.css';

function ErrorPage() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={s.container}>
            <h2 className={theme === 'first' ? s.title : s.titleSecond}>
                Oops! Something went wrong...
            </h2>
        </div>
    );
}

export {ErrorPage};
