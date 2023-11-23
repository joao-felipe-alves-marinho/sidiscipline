import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { Box, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material';

import { useAppThemeContext } from '../../contexts';

const listItens = [
    {
        label: 'Home',
        icon: 'home',
        to: '/home',
    },
    {
        label: 'Lista de Datas',
        icon: 'list',
        to: '/lista-datas',
    },
    {
        label: 'Configurações',
        icon: 'settings',
        to: '/configuracoes',
    },
];

interface IMenuLateralListItensProps {
    label: string;
    icon: string;
    to: string;
}

const MenuLateralListItens: React.FC<IMenuLateralListItensProps> = ({
    label,
    to,
    icon,
}) => {
    const resolvePath = useResolvedPath(to);
    const match = useMatch({ path: resolvePath.pathname, end: false });

    return (
        <ListItem disablePadding>
            <ListItemButton selected={!!match} href={to}>
                <ListItemIcon>
                    <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={label} />
            </ListItemButton>
        </ListItem>
    );
};

export const MenuLateralList = () => {
    const { toggleTheme, themeName } = useAppThemeContext();

    const navigate = useNavigate();

    const onLogOut = () => {
        localStorage.clear();
        navigate('/login');
        window.location.reload();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            }}
        >
            <Box flex={1}>
                <List>
                    {listItens.map((item, i) => (
                        <MenuLateralListItens
                            key={i}
                            label={item.label}
                            icon={item.icon}
                            to={item.to}
                        />
                    ))}
                </List>
            </Box>
            <Box>
                <Divider variant='middle' />
                <List>
                    <ListItem key='theme-toggle' disablePadding>
                        <ListItemButton onClick={toggleTheme}>
                            <ListItemIcon>
                                <Icon>{themeName === 'dark' ? 'light_mode' : 'dark_mode'}</Icon>
                            </ListItemIcon>
                            <ListItemText
                                primary={themeName === 'dark' ? 'Tema Claro' : 'Tema Escuro'}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='log-out' disablePadding>
                        <ListItemButton onClick={onLogOut}>
                            <ListItemIcon>
                                <Icon>logout</Icon>
                            </ListItemIcon>
                            <ListItemText primary='Log out' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};
