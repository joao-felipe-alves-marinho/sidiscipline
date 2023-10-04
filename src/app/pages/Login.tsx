import { Box, Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material';

function Login() {
    return (
        <>
            <Box component='div' sx={{
                width: 'fullWidth',
                height: '300px',
                backgroundColor: 'primary.main',
            }}>
                <Typography fontWeight='bold' variant='h3' color={'white'} padding={1}>Sidiscipline</Typography>
                <Box width='100vw' height='75vh' display='flex' alignItems='center' justifyContent='center'>
                    <Card  sx={{
                    border: 1,
                    borderColor: 'secondary.main',
                    boxShadow: 3,
                    width: '700px',
                    paddingX: 5,
                    paddingY: 2
                }}>
                        <CardContent>
                            <Box display='flex' flexDirection='column' gap={2} >
                                <Typography fontWeight='600' variant='h2' align='center' color='primary'> Login </Typography>

                                <TextField
                                    label='Email'
                                    type='email' />

                                <TextField
                                    label='Senha'
                                    type='password' />

                                <FormControlLabel control={<Checkbox color='secondary' />} label="Lembre-se de mim" />
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Button
                            sx={{
                                fontWeight: 'bold'
                            }}
                                variant='contained'
                                href='/home'
                                color='secondary'
                                fullWidth>
                                Login
                            </Button>
                        </CardActions>
                        <CardContent>
                            <Box display='flex' flexDirection='row' justifyContent='space-between'>
                                <Link variant='body1'>Cadastre-se</Link>
                                <Link variant='body1'>Esqueceu a senha?</Link>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default Login;