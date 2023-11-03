import { Card, CardContent, Box, Typography, TextField, CardActions, Button, Link, useTheme } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const EmailSchema = yup.object({
    password: yup.string().required('Esse campo é obrigatorio.').min(5, 'A senha deve ter pelo menos 5 caracteres.'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'As senhas não coincidem.')
});


export const RecuperarSenhaMudar = () => {
    const theme = useTheme();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            password: '',
            passwordConfirmation: ''
        },
        resolver: yupResolver(EmailSchema)
    });

    const onSubmit = (dados: { password: string }) => {
        const user = JSON.parse(localStorage.getItem('user')!);
        user.password = dados.password;
        localStorage.setItem('user', JSON.stringify(user));
    };

    return (
        <Card component='form' onSubmit={handleSubmit(onSubmit)} sx={{
            borderRadius: theme.spacing(5),
            py: theme.spacing(6),
            px: theme.spacing(12),
        }}>
            <CardContent sx={{
                p: theme.spacing(1)
            }}>
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    width={theme.spacing(60)}
                    gap={2}
                >

                    <Typography
                        variant='h4'
                        fontWeight='Bold'
                        color='primary'
                        mt={1}
                        mb={4}
                    >Digite sua Nova Senha</Typography>

                    <TextField
                        fullWidth
                        label='Nova Senha'
                        placeholder='********'
                        type='password'
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <TextField
                        fullWidth
                        label='Confirmar Nova Senha'
                        placeholder='********'
                        type='password'
                        {...register('passwordConfirmation')}
                        error={!!errors.passwordConfirmation}
                        helperText={errors.passwordConfirmation?.message}
                    />
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
                        Confirmar
                    </Button>
                    <Box
                        display='flex'
                        width='100%'
                        justifyContent='space-between'
                    >
                        <Link href='/cadastro' >Cadastre-se</Link>
                        <Link href='/login' >Voltar a tela de login</Link>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
};