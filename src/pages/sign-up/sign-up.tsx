import {ChangeEvent, FormEvent, useState} from 'react';
import {useDispatch} from 'react-redux';

import {useNavigate} from 'react-router';
import {AppRoute} from '../../routing/app-route';
import {logIn} from '../../redux/slices/auth-slice';

import s from './sign-up.module.css';

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(AppRoute.Empty);

        const userInfo = {
            userName,
            password,
            favorites: [],
            history: [],
        };
        console.log(userInfo);
        dispatch(logIn(userInfo));
        // dispatch(setFavorites(userInfo.favorites));
        // dispatch(setHistory(userInfo.history));
    };

    return (
        <form className={s.form} action="#" onSubmit={handleSubmit}>
            <div className={s.container}>
                <div className={s.inputContainer}>
                    <label htmlFor="userName">User name</label>
                    <input
                        type="userName"
                        className={`${s.inputField} form-control`}
                        id="userName"
                        name="userName"
                        aria-describedby="userNameHelp"
                        placeholder="Enter userName"
                        value={userName}
                        required
                        onChange={handleUserNameChange}
                    />
                </div>
                <div className={s.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={`${s.inputField} form-control`}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        required
                        onChange={handlePasswordChange}
                    />
                </div>
                <button className={s.btn} type="submit">
                    Sign up
                </button>
            </div>
        </form>
    );
}

export {SignUp};
