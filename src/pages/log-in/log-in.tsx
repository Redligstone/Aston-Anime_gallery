import {useState, ChangeEvent, FormEvent, useContext} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {handleLogIn} from '../../services/registration-auth';
import {ThemeContext} from '../../services/theme/theme-provider';
import {logInClasses} from '../../services/theme/theme-classes/login-classes';

import s from './log-in.module.css';

function LogIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {theme} = useContext(ThemeContext);
    const labelClass = logInClasses.labelClass(theme);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [invalidLogin, setInvalidLogin] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
        if (invalidLogin) {
            setInvalidLogin(false);
        }
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        if (invalidPassword) {
            setInvalidPassword(false);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userInfo = {userName, password};
        const authResult = handleLogIn({navigate, dispatch}, userInfo);
        setInvalidLogin(authResult.invalidLogin);
        setInvalidPassword(authResult.invalidPassword);
    };

    return (
        <div className={s.wrapper}>
            <form className={s.form} action="#" onSubmit={handleSubmit}>
                <h2 className={logInClasses.titleClass(theme)}>Log in</h2>
                <div className={s.container}>
                    <div className={s.inputContainer}>
                        <label className={labelClass} htmlFor="userName">
                            User name
                        </label>
                        <input
                            type="text"
                            className={`${s.inputField} form-control`}
                            id="userName"
                            name="userName"
                            aria-describedby="userNameHelp"
                            placeholder="Enter username"
                            value={userName}
                            required
                            onChange={handleUserNameChange}
                        />
                        {invalidLogin && (
                            <div className={s.error}>User was not found. Please, try again.</div>
                        )}
                    </div>
                    <div className={s.inputContainer}>
                        <label className={labelClass} htmlFor="password">
                            Password
                        </label>
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
                        {invalidPassword && (
                            <div className={s.error}>Wrong password. Please, try again.</div>
                        )}
                    </div>
                    <button className={logInClasses.buttonClass(theme)} type="submit">
                        Log in
                    </button>
                </div>
            </form>
        </div>
    );
}

export {LogIn};
