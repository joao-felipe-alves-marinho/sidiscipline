import { PropsWithChildren } from 'react';
import { AppBar, Box, Icon, IconButton, Toolbar, Typography } from '@mui/material';

import { useDrawerContext } from '../contexts';

export const LayoutBase: React.FC<PropsWithChildren> = ({ children }) => {
    const { toggleDrawer } = useDrawerContext();

    return (
        <Box height='100%' width='100%' display='flex' flexDirection='column' gap={5}>
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
                        aria-label='menuButton'
                    >
                        <Icon sx={{ fontSize: 30 }} >menu</Icon>
                    </IconButton>

                    <Typography pr={3} variant='h4'><b>SIDI</b>SCIPLINE</Typography>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    );
};
