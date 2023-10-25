import { common, deepPurple, green, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material';

const contrastGrey = '#000000ae';
const contrastGrey2 = '#000000bf';
const contrastRed = '#930000';

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
        error: {
            main: contrastRed,
        },
        background: {
            default: grey['300'],
            paper: common['white'],
        }
    },

    typography: {
        allVariants: {
            fontFamily: 'Poppins, Roboto'
        }
    },

    breakpoints: {
        values: {
            xs: 300,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
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

        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: contrastGrey2
                }
            }
        },

        MuiListItemText: {
            defaultProps: {
                primaryTypographyProps: {
                    color: contrastGrey2
                }
            }
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: contrastGrey,
                    },
                    '& label.Mui-focused': {
                        color: contrastGrey,
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: contrastGrey,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: contrastGrey,
                        },
                        '&:hover fieldset': {
                            borderColor: contrastGrey,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: contrastGrey,
                        },
                    }
                },
            }
        },


    }
});