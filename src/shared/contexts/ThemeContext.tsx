import {
    createContext,
    useContext,
    useState,
    useCallback,
    useMemo,
    PropsWithChildren
} from 'react';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';

import {
    DarkTheme,
    LightTheme
} from './../themes';

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemeName((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;
        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box
                    width="100vw"
                    height="100vh"
                    bgcolor={theme.palette.background.default}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
