import {ChangeEvent, FormEvent, useContext, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {handleSignUp} from '../../services/registration-auth';
import {ThemeContext} from '../../services/theme/theme-provider';

import s from './sign-up.module.css';

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {theme} = useContext(ThemeContext);
    const labelClass = theme === 'first' ? s.label : s.labelSecond;

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

        const userInfo = {userName, password};
        const signUpSuccess = handleSignUp({navigate, dispatch}, userInfo);

        if (!signUpSuccess) {
            alert('User with this name alredy exists');
        }
    };

    return (
        <div className={s.wrapper}>
            <form className={s.form} action="#" onSubmit={handleSubmit}>
                <h2 className={theme === 'first' ? s.title : s.titleSecond}>Sign Up</h2>
                <div className={s.container}>
                    <div className={s.inputContainer}>
                        <label className={labelClass} htmlFor="userName">
                            User name
                        </label>
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
                    </div>
                    <button className={theme === 'first' ? s.btn : s.btnSecond} type="submit">
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}

export {SignUp};
