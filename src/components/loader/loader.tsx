import * as LoaderSign from 'react-loader-spinner';
import s from './loader.module.css';

function Loader() {
    return (
        <div className={s.loader}>
            <LoaderSign.Oval ariaLabel="loading-indicator" width="100vw" />{' '}
        </div>
    );
}

export {Loader};
