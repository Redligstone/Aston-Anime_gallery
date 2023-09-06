import {Link} from 'react-router-dom';
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <Link to="/" className={s.logo}>
                    Anime gallery
                </Link>
                <div className="nav_buttons">
                    <div>
                        <Link to="/signin" className={`${s.btn}`}>
                            Sign In
                        </Link>
                        <Link to="/signup" className={`${s.btn}`}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Header};
