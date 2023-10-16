import { Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const listItens = [['Home', 'home']];

export const MenuList = () => {
    return (
        <List>
            {listItens.map(([item, itemIcon]) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>{itemIcon}</Icon>
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};