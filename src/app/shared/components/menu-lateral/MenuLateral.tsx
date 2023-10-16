import { ChevronLeft } from '@mui/icons-material';
import { Avatar, Box, Divider, Drawer, Stack, useTheme, IconButton, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { MenuList } from './MenuList';


export const MenuLateral: React.FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();
    return (
        <>
            <Box display='flex'>
                <Drawer variant='permanent' sx={{
                    width: theme.spacing(25),
                    '& .MuiDrawer-paper': {
                        width: theme.spacing(25),
                        boxSizing: 'border-box',
                    },
                }}>
                    <Stack
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
                                <IconButton size='large' >
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
                        <Box flex={1}>
                            <MenuList></MenuList>
                        </Box>
                    </Stack>
                </Drawer>
                {children}
            </Box >
        </>
    );
};
