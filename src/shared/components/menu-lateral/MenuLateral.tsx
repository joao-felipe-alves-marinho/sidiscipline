import { ChevronLeft } from '@mui/icons-material';
import { Avatar, Box, Divider, Drawer, Stack, useTheme, IconButton, Typography, useMediaQuery } from '@mui/material';
import { PropsWithChildren } from 'react';
import { MenuLateralList } from './MenuLateralList';
import { useDrawerContext } from '../../contexts';


export const MenuLateral: React.FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawer } = useDrawerContext();

    return (
        <>
            <Box display='flex'>
                <Drawer key='menu-lateral' variant={smDown ? 'temporary' : 'permanent'}
                    open={isDrawerOpen}
                    onClose={toggleDrawer}
                    sx={{
                        width: theme.spacing(30),
                        '& .MuiDrawer-paper': {
                            width: theme.spacing(30),
                            height: '100vh',
                            boxSizing: 'border-box',
                        },
                    }}>
                    <Stack
                        height='100%'
                        display='flex'
                        flexDirection='column'
                        divider={<Divider variant='middle' />}>
                        <Box
                            width='100%'
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'>
                            <Box
                                width='100%'
                                display='flex'
                                justifyContent='flex-end'>
                                <IconButton onClick={toggleDrawer} aria-label='closeMenu' size='large' >
                                    <ChevronLeft />
                                </IconButton>
                            </Box>
                            <Avatar sx={{
                                width: theme.spacing(10),
                                height: theme.spacing(10),
                                bgcolor: 'secondary.main',
                                color: 'black'
                            }}>
                                G
                            </Avatar>
                            <Typography paddingY={1} variant='body1'>Gustavo Gomes</Typography>
                        </Box>
                        <Box display='flex' flex={1}>
                            <MenuLateralList />
                        </Box>
                    </Stack>
                </Drawer>
                {children}
            </Box >
        </>
    );
};