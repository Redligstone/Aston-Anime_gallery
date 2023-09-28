import React from 'react';

export type FormEventWithSearch = React.FormEvent<HTMLFormElement> & {
    target: {
        search: {
            value: string;
        };
    };
};
