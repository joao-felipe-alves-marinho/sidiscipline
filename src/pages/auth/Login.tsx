import {
    Box,
    useTheme
} from '@mui/material';

export const Login = () => {
    const theme = useTheme();

    return (
        <Box
            height='100%'
            width='100%'
        >
            <Box width='50%' height={theme.spacing(11)} bgcolor='secondary.main' zIndex={5}></Box>
        </Box>
    );
};