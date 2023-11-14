import { common, deepPurple, green, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material';

const contrastTextField = common['white'];
const contrastListItemText = common['white'];
const contrastRed = '#930000';

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
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
        action: {
            disabled: contrastListItemText
        },
        background: {
            paper: grey['800'],
            default: grey['900'],
        },
        divider: grey['400'],
    },

    typography: {
        allVariants: {
            color: common['white'],
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
                variant: 'middle'
            }
        },

        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: grey['900']
                    }
                }
            },
        },

        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: contrastListItemText
                }
            }
        },

        MuiListItemText: {
            defaultProps: {
                primaryTypographyProps: {
                    color: contrastListItemText
                }
            }
        },

        MuiLink: {
            defaultProps: {
                fontFamily: 'Poppins, Roboto'
            }
        },

        MuiTextField: {
            defaultProps: {
                spellCheck: false,
            },
            styleOverrides: {
                root: {
                    '& label': {
                        color: contrastTextField,
                    },
                    '& label.Mui-focused': {
                        color: contrastTextField,
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: contrastTextField,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: contrastTextField,
                        },
                        '&:hover fieldset': {
                            borderColor: contrastTextField,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: contrastTextField,
                        },
                    }
                },
            }
        },
    }
});