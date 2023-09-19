import s from '../../../components/card/card.module.css';

export const cardStyles = {
    rankingTextClass: (theme: string) => (theme === 'first' ? s.rankingText : s.rankingTextSecond),
    titleClass: (theme: string) => (theme === 'first' ? s.title : s.titleSecond),
    viewBtnClass: (theme: string) => (theme === 'first' ? s.viewBtn : s.viewBtnSecond),
};
