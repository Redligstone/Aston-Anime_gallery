import React, {createContext, useCallback, useMemo, useState} from 'react';

type ThemeProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext({
    theme: 'first',
    toggleTheme: () => {},
});

function ThemeProvider({children}: ThemeProps) {
    const [theme, setTheme] = useState('first');
    const toggleTheme = useCallback(() => {
        setTheme(theme === 'first' ? 'second' : 'first');
    }, [theme]);

    const themeObject = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);

    return <ThemeContext.Provider value={themeObject}> {children}</ThemeContext.Provider>;
}

export {ThemeProvider};
