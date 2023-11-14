import { common, deepPurple, green, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material';

const contrastTextField = '#000000ae';
const contrastListItemText = '#000000bf';
const contrastRed = '#930000';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: deepPurple['700'],
            contrastText: common['white'],

        },
        secondary: {
            main: green['A400'],
            contrastText: common['black'],
        },
        error: {
            main: contrastRed,
        },
        background: {
            default: grey['300'],
            paper: common['white'],
        },
        divider: grey['400'],

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
                variant: 'middle'
            }
        },

        MuiLink: {
            defaultProps: {
                fontFamily: 'Poppins, Roboto'
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

        MuiPaper: {
            styleOverrides: {
                root: {
                    '& .MuiDayCalendar-weekDayLabel': {
                        color: contrastListItemText
                    }
                }
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