import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, Link, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as yup from 'yup';

interface FormValues {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().required("Preencha o campo de E-mail.").email("Insira um e-mail válido."),
    password: yup.string().required("Preencha o campo de Senha.")
})

function Login() {

    const { register, handleSubmit, formState } = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema)
    })

    const { errors } = formState;

    const navigate = useNavigate();

    const onSubmit = (data: FormValues) =>{
        console.log(data);
        navigate('/home');
    }

    return (
        <>
            <Box component='div' sx={{
                width: 'fullWidth',
                height: '300px',
                backgroundColor: 'primary.main',
            }}>
                <Typography fontWeight='bold' variant='h3' color={'white'} padding={1}>Sidiscipline</Typography>
                <Box width='100vw' height='75vh' display='flex' alignItems='center' justifyContent='center'>
                    <Card sx={{
                        border: 1,
                        borderColor: 'secondary.main',
                        borderRadius: 5,
                        boxShadow: 3,
                        width: '700px',
                        paddingX: 5,
                        paddingY: 2
                    }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardContent>
                                <Stack display='flex' flexDirection='column' gap={2} >
                                    <Typography fontWeight='600' variant='h2' align='center' color='primary'> Login </Typography>

                                    <TextField
                                        fullWidth
                                        color='secondary'
                                        label='Email'
                                        type='email' 
                                        {...register("email")}
                                        error={!!errors.email}
                                        helperText={errors.email?.message} />
                                        
                                    <TextField
                                        fullWidth
                                        color='secondary'
                                        label='Senha'
                                        type='password'
                                        {...register("password")}
                                        error={!!errors.password}
                                        helperText={errors.password?.message} />

                                    <FormControlLabel control={<Checkbox color='secondary' />} label="Lembre-se de mim" />
                                </Stack>
                            </CardContent>
                            <CardActions>
                                <Button
                                    type='submit'
                                    sx={{
                                        fontWeight: 'bold'
                                    }}
                                    variant='contained'
                                    color='secondary'
                                    fullWidth>
                                    Login
                                </Button>
                            </CardActions>
                        </form>
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