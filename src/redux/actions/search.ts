import {createAction} from '@reduxjs/toolkit';

export const search = createAction('SEARCH', (payload) => ({
    payload,
}));
