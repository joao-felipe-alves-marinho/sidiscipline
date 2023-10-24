import { PropsWithChildren } from 'react';

import { AppBar, Box, Icon, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';

import { useDrawerContext } from '../contexts';

export const LayoutBase: React.FC<PropsWithChildren> = ({ children }) => {
    const { toggleDrawer } = useDrawerContext();

    const theme = useTheme();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box height='100vh' width='100%' display='flex' flexDirection='column' gap={5}>
            <AppBar position='static' color='primary'>
                <Toolbar
                    disableGutters
                    component={Box}
                    display='flex'
                    justifyContent='space-between'
                >
                    <IconButton
                        onClick={toggleDrawer}
                        size='large'
                        color='inherit'
                        aria-label='Abre o menu lateral'
                    >
                        <Icon sx={{ fontSize: 30 }} >menu</Icon>
                    </IconButton>

                    <Typography pr={3} variant={xsDown ? 'h5' : smDown ? 'h4' : 'h3'}><b>SIDI</b>SCIPLINE</Typography>
                </Toolbar>
            </AppBar>
            <Box flex={1}>
            {children}
            </Box>
        </Box>
    );
};
