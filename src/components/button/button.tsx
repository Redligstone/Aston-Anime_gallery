import React from 'react';
import './button.css';

type ButtonProps = {
    onClick?: () => void;
    classValue?: string;
    children: React.ReactNode;
};

function Button({onClick, classValue, children}: ButtonProps) {
    return (
        <button className={`${classValue}`} type="button" onClick={onClick}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    onClick: () => {},
    classValue: '',
};

export {Button};
export type {ButtonProps};
