import s from '../../../pages/sign-up/sign-up.module.css';

export const signUpClasses = {
    titleClass: (theme: string) => (theme === 'first' ? s.title : s.titleSecond),
    labelClass: (theme: string) => (theme === 'first' ? s.label : s.labelSecond),
    buttonClass: (theme: string) => (theme === 'first' ? s.btn : s.btnSecond),
};
