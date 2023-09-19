import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {localStorageUtil} from '../../utils/local-storage';
import {HistoryRecord, HistoryRecordWithId} from '../../types/history-record';
import {Button} from '../../components/button/button';
import {ThemeContext} from '../../services/theme/theme-provider';
import {getUserNameSelector} from '../../redux/slices/auth-slice';
import {historyClasses} from '../../services/theme/theme-classes/history-classes';

import s from './history.module.css';

function History() {
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    const user = useSelector(getUserNameSelector) || '';
    const searchHistory = localStorageUtil.getSearchHistory(user);

    const searchHistoryWithId = searchHistory.map(
        (historyRecord: HistoryRecord): HistoryRecordWithId => ({
            id: uuidv4(),
            ...historyRecord,
        })
    );

    const backButtonHandler = () => {
        navigate('/');
    };

    const handleClick = (query: string) => {
        navigate(query);
    };

    return (
        <div className={s.container}>
            <h3 className={historyClasses.headerClass(theme)}>Search History:</h3>
            <table className={`${historyClasses.tableClass(theme)} ${s.tableHover}`}>
                <thead>
                    <tr>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Query</th>
                        <th scope="col">Matches</th>
                        <th scope="col">Results</th>
                    </tr>
                </thead>
                <tbody>
                    {searchHistoryWithId.map((historyRecord: HistoryRecordWithId) => {
                        const {id, query, timestamp, queryResultNumber, queryResultLink} =
                            historyRecord;
                        return (
                            <tr key={id}>
                                <td>{timestamp}</td>
                                <td>{query}</td>
                                <td>{queryResultNumber}</td>
                                <td>
                                    <Button
                                        classValue={historyClasses.buttonClass(theme)}
                                        onClick={() => handleClick(queryResultLink)}
                                    >
                                        View
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Button onClick={backButtonHandler} classValue={historyClasses.backButtonClass(theme)}>
                ← Back
            </Button>
        </div>
    );
}

export {History};
