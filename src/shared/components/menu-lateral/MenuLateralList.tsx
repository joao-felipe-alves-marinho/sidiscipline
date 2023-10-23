import { Box, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMatch, useResolvedPath } from 'react-router-dom';

const listItens = [
    {
        label: 'Home',
        icon: 'home',
        to: '/home'
    },
];

interface IMenuLateralListItensProps {
    label: string;
    icon: string;
    to: string;
}

const MenuLateralListItens: React.FC<IMenuLateralListItensProps> = ({ label, to, icon }) => {
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

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
        }}>
            <Box flex={1}>
                <List>
                    {listItens.map((item, i) => (
                        <MenuLateralListItens key={i} label={item.label} icon={item.icon} to={item.to} />
                    ))}
                </List>
            </Box>
            <Box>
                <Divider variant='middle' />
                <List>
                    <ListItem key='theme-toggle' disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon>dark_mode</Icon>
                            </ListItemIcon>
                            <ListItemText primary='Tema Escuro' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='log-out' disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon >logout</Icon>
                            </ListItemIcon>
                            <ListItemText primary='Log out' />
                        </ListItemButton>
                    </ListItem>
                </List >
            </Box>
        </Box >
    );
};