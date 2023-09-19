import s from '../../../pages/log-in/log-in.module.css';

export const logInClasses = {
    titleClass: (theme: string) => (theme === 'first' ? s.title : s.titleSecond),
    labelClass: (theme: string) => (theme === 'first' ? s.label : s.labelSecond),
    buttonClass: (theme: string) => (theme === 'first' ? s.btn : s.btnSecond),
};
