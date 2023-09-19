import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import './index.css';

import {store} from './redux/store';
import {App} from './app';
import {ThemeProvider} from './services/theme/theme-provider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
