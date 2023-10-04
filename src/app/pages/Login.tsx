import { Box, Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material';

function Login() {
    return (
        <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center'>
            <Card>
                <CardContent>
                    <Box display='flex' flexDirection='column' gap={2} width='750px'>
                        <Typography variant='h2' align='center' color='primary'> Login </Typography>

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
                        variant='contained'
                        href='/'
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
    )
}

export default Login;