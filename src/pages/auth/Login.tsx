import { Box, Card, useTheme } from '@mui/material';

export const Login = () => {
    const theme = useTheme();

    return (
        <Box height='100%' width='100%' display='flex'>
            <Box bgcolor='primary.main' height={theme.spacing(38)} width='100%'>
                <Card>

                </Card>
            </Box>

        </Box>
    );
};