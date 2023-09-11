import React from 'react';

type ButtonProps = {
    onClick?: () => void;
    size?: string;
    className?: string;
    children: React.ReactNode;
};

function Button({onClick, size, className, children}: ButtonProps) {
    return (
        <button className={`btn btn-${size} ${className}`} type="button" onClick={onClick}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: '',
    onClick: () => {},
    className: '',
};

export {Button};
export type {ButtonProps};
