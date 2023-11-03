import { Button, Box, Card, CardActions, CardContent, Typography, useTheme, TextField, Link } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState } from 'react';

import { useAuthContext } from '../../shared/contexts';

const LoginSchema = yup.object({
    email: yup.string().required('Digite seu e-mail.'),
    password: yup.string().required('Digite sua senha.')
});

interface ILoginDadosForm {
    email: string;
    password: string;
}

export const Login = () => {
    const theme = useTheme();

    const { login } = useAuthContext();

    const [matchAuth, setMatchAuth] = useState<boolean>();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(LoginSchema)
    });


    const onSubmit = (dados: ILoginDadosForm) => {
        login(dados.email, dados.password) ?
            window.location.reload()
            : setMatchAuth(false);
    };

    return (
        <Box
            width='100%'
            height='43%'
            bgcolor='primary.main'
            display='flex'
        >
            <Typography
                variant='h3'
                color='white'
                fontWeight='bold'
                m={2}
            >SIDISCIPLINE</Typography>

            <Box
                position='absolute'
                width='100%'
                height='100%'
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Card component='form' onSubmit={handleSubmit(onSubmit)} sx={{
                    borderRadius: theme.spacing(5),
                    py: theme.spacing(6),
                    px: theme.spacing(14),
                }}>
                    <CardContent sx={{
                        p: theme.spacing(1)
                    }}>
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            width={theme.spacing(50)}
                            gap={4}
                        >

                            <Typography
                                variant='h2'
                                fontWeight='Bold'
                                color='primary'
                            >LOGIN</Typography>

                            <TextField
                                fullWidth
                                label='E-mail'
                                placeholder='gustavo.silva@gmail.com'
                                type='email'
                                {...register('email')}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                            <TextField
                                fullWidth
                                label='Senha'
                                placeholder='********'
                                type='password'
                                {...register('password')}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />

                            {(matchAuth === undefined) ?
                                undefined :
                                (matchAuth === false) ? <Typography color='error'>Email ou Senha incorreto</Typography> :
                                    <Typography>Logado com sucesso</Typography>}
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            width='100%'
                            mt={4}
                            gap={4}
                        >
                            <Button
                                fullWidth
                                color='secondary'
                                type='submit'
                                sx={{
                                    fontSize: theme.spacing(2)
                                }}
                            >
                                Entrar
                            </Button>
                            <Box
                                display='flex'
                                width='100%'
                                justifyContent='space-between'
                            >
                                <Link href='/cadastro' >Cadastre-se</Link>
                                <Link href='/recuperar-senha' >Esqueci minha senha</Link>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
};