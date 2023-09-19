import s from '../../../components/header/header.module.css';

export const headerClasses = {
    headerClass: (theme: string) => (theme === 'first' ? s.headerFirst : s.headerSecond),
    logoClass: (theme: string) => (theme === 'first' ? s.logo : s.logoSecond),
    logoAccentClass: (theme: string) => (theme === 'first' ? s.logoAccent : s.logoAccentSecond),
    userClass: (theme: string) => (theme === 'first' ? s.user : s.userSecond),
    btnClass: (theme: string) => (theme === 'first' ? s.btn : s.btnSecond),
    themeButtonClass: (theme: string) =>
        theme === 'first' ? 'theme-button-first' : 'theme-button-second',
};
