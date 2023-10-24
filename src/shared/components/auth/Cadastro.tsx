import { Box, Button, Checkbox, FormControlLabel, Link, Stack, TextField, Typography, useTheme } from '@mui/material';

export const Cadastro = () => {
    const theme = useTheme();

    return (
        <Box height='100%' width='100%' display='flex'>
            <Box
                height='100%'
                width={theme.spacing(50)}
                bgcolor='primary.main'
                display='flex'
                flexDirection='column'
                alignItems='center'
                color='primary.contrastText'
            >
                <Typography mt={14} variant='h2' color=''><b>SIDI</b>SCIPLINE</Typography>
                <Typography mx={6} mt={10} align='center' variant='h5'>Seja bem-vindo e controle seu tempo!</Typography>
                <Typography mt={10} mb={2}>Faça seu login para continuar.</Typography>
                <Button href='/login' sx={{ width: theme.spacing(35), height: theme.spacing(6), fontSize: theme.spacing(2.5) }} color='secondary'>Entrar</Button>
                <Link fontFamily='Poppins' mt={2} color='inherit' underline='always' href='/recuperar-senha'>Esqueci minha senha</Link>

            </Box>
            <Box flex={1} display='flex' justifyContent='center' alignItems='center' m={2}>
                <Stack spacing={2} component='form' onSubmit={() => console.log('submited')}>
                    <Typography color='primary.dark' variant='h3'><b>CRIE SUA CONTA</b></Typography>
                    <Typography mt={1} mb={4}>Registre-se para não perder um minuto.</Typography>
                    <TextField label='Nome' placeholder='Gustavo Silva' />
                    <TextField label='E-mail' placeholder='gustavo.silva@gmail.com' />
                    <TextField label='Senha' placeholder='********' />
                    <TextField label='Confirmar Senha' placeholder='********' />
                    <FormControlLabel
                        control={<Checkbox color='secondary'/>}
                        label={<Typography>
                            Li e estou de acordo com os <Link color='primary.dark'>Termos de uso e politica de privacidade</Link>.
                        </Typography>}
                    />
                    <Button type='submit' color='secondary'>Cadastrar</Button>
                </Stack>
            </Box>
        </Box >
    );
};