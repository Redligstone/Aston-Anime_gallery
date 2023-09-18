import {useState, ChangeEvent, FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {localStorageUtil} from '../../utils/local-storage';
import {handleLogIn} from '../../services/registration-auth';

import s from './log-in.module.css';

function LogIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userInfo = localStorageUtil.getUser(userName);

        if (!userInfo) {
            setInvalidLogin(true);
        } else if (userInfo.password !== password) {
            setInvalidPassword(true);
        } else {
            handleLogIn({navigate, dispatch}, userInfo);
        }
    };

    return (
        <form className={s.form} action="#" onSubmit={handleSubmit}>
            <h2 className={s.title}>Log in</h2>
            <div className={s.container}>
                <div className={s.inputContainer}>
                    <label htmlFor="userName">User name</label>
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
                    {invalidPassword && (
                        <div className={s.error}>Wrong password. Please, try again.</div>
                    )}
                </div>
                <button className={s.btn} type="submit">
                    Log in
                </button>
            </div>
        </form>
    );
}

export {LogIn};
