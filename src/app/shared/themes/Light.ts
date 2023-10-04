import { createTheme } from "@mui/material";
import { common, deepPurple, green, grey } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: deepPurple['700'],
            dark: deepPurple['800'],
            light: deepPurple['500'],
            contrastText: common['white'],

        },
        secondary: {
            main: green['A400'],
            dark: green['A700'],
            light: green['A200'],
            contrastText: common['black'],
        },
        background: {
            default: grey['100'],
            paper: common['white'],
        }
    }
});
