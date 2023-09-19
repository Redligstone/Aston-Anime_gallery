import s from '../../../components/search-bar/search-bar.module.css';

export const searchBarClasses = {
    inputClass: (theme: string) => (theme === 'first' ? s.input : s.inputSecond),
    buttonClass: (theme: string) => (theme === 'first' ? s.searchButton : s.searchButtonSecond),
};
