import { createTheme } from '@mui/material';
import { common, deepPurple, green, grey } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: deepPurple['700'],
            dark: deepPurple['800'],
            light: deepPurple['400'],
            contrastText: common['white'],

        },
        secondary: {
            main: green['A400'],
            dark: green['A700'],
            light: green['A200'],
            contrastText: common['black'],
        },
        background: {
            default: grey['300'],
            paper: common['white'],
        }
    },
    typography: {
        fontFamily: 'Poppins, Roboto'
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            }
        },

        MuiDivider: {
            defaultProps: {
                color: grey['400']
            }
        },

        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: grey['300']
                    }
                }
            },
        },

        MuiListItemText: {
            defaultProps: {
                primaryTypographyProps: {
                    color: '#000000bf'
                }
            }
        }
    }
});