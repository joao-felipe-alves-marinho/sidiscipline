import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

// eslint-disable-next-line react-hooks/rules-of-hooks

function Menu() {
    return (
        <Drawer variant="permanent" anchor="left" PaperProps={{
            sx: {
                bgcolor: grey['300'],
            }
        }}>
            <Box width={224} height='100%' display='flex' flexDirection='column'>
                <Box display='flex' alignContent='center' justifyContent='center'>
                    <Avatar sx={{ margin: '25px', width: '60px', height: '60px', bgcolor: "secondary.main" }}>D</Avatar>
                </Box>

                <Divider variant="middle" />

                <Box flex={1}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton autoFocus>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton href="/login">
                                <ListItemText primary="Log out" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>

            </Box>
        </Drawer>
    )
}

function Home() {
    return (
        <>
            <Menu></Menu>
            <Box height='100vh' sx={{ bgcolor: grey['200'] }} display='flex' flexDirection='column'>
                <Box boxShadow={1} display='flex' alignContent='end' justifyContent='right' sx={{ bgcolor: 'primary.main' }}>
                    <Typography color={"white"} fontWeight={'bold'} marginX={1} variant="h2">SIDISCIPLINE</Typography>
                </Box>
                <Box margin={1} flex={1} display='flex' alignContent='center' justifyContent='center'>
                    <Typography variant="h3"> WIP </Typography>
                </Box>
            </Box>
        </>
    )
}


export default Home;
