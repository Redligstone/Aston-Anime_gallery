import s from '../../../pages/history/history.module.css';

export const historyClasses = {
    headerClass: (theme: string) => (theme === 'first' ? s.header : s.headerSecond),
    tableClass: (theme: string) => (theme === 'first' ? s.table : s.tableSecond),
    buttonClass: (theme: string) =>
        theme === 'first' ? 'view-default-button' : 'view-default-button-second',
    backButtonClass: (theme: string) =>
        theme === 'first' ? 'default-button' : 'default-button-second',
};
