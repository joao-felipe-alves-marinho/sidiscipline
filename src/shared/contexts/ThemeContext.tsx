import { PropsWithChildren, createContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from '../themes';
import { Box } from '@mui/material';

const ThemeContext = createContext(LightTheme);

export const AppThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {

    return (
        <ThemeContext.Provider value={LightTheme}>
            <ThemeProvider theme={LightTheme}>
                <Box width="100vw" height="100vh" bgcolor={LightTheme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};