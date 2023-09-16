import {useDispatch} from 'react-redux';
import {init} from './redux/actions/init';
import {Main} from './pages/main/main';

function App() {
    const dispatch = useDispatch();
    dispatch(init());
    return (
        <div>
            <Main />
        </div>
    );
}

export {App};
