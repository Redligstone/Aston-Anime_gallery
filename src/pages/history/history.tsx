import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {v4 as uuidv4} from 'uuid';
import {localStorageUtil} from '../../utils/local-storage';
import {HistoryRecord, HistoryRecordWithId} from '../../types/history-record';

import {Button} from '../../components/button/button';

import {getUserNameSelector} from '../../redux/slices/auth-slice';

import s from './history.module.css';

function History() {
    const navigate = useNavigate();

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
            <h3>Search History:</h3>{' '}
            <table className={`${s.table} ${s.tableHover}`}>
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
                                        className={s.viewButton}
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
            <Button onClick={backButtonHandler} className={s.customButton}>
                ← Back
            </Button>
        </div>
    );
}

export {History};
