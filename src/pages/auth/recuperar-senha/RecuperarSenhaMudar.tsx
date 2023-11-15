import { Card, CardContent, Box, Typography, TextField, CardActions, Button, Link, useTheme, useMediaQuery } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAuthContext } from '../../../shared/contexts';

const EmailSchema = yup.object({
    password: yup.string().required('Esse campo é obrigatorio.').min(5, 'A senha deve ter pelo menos 5 caracteres.'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'As senhas não coincidem.')
});


export const RecuperarSenhaMudar = (props: {
    email: string
}) => {
    const theme = useTheme();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const navigate = useNavigate();

    const { changePassword } = useAuthContext();

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        defaultValues: {
            password: '',
            passwordConfirmation: ''
        },
        resolver: yupResolver(EmailSchema),
        mode: 'onChange'
    });

    const onSubmit = (dados: { password: string }) => {
        changePassword(props.email, dados.password);
        navigate('/login');
    };

    return (
        <Card component='form' onSubmit={handleSubmit(onSubmit)} sx={{
            borderRadius: theme.spacing(5),
            py: smDown ?
                xsDown ? 0 : theme.spacing(1)
                : theme.spacing(6),
            px: smDown ?
                xsDown ? 0 : theme.spacing(1)
                : theme.spacing(14),
        }}>
            <CardContent sx={{
                p: theme.spacing(1)
            }}>
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    width={smDown ? undefined : theme.spacing(60)}
                    gap={2}
                >

                    <Typography
                        variant={xsDown ? 'h5' : 'h4'}
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
                        disabled={!isDirty || !isValid}
                    >
                        Confirmar
                    </Button>
                    <Box
                        display='flex'
                        flexDirection={xsDown ? 'column' : 'row'}
                        width='100%'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Link href='/cadastro' >Cadastre-se</Link>
                        <Link href='/login' >Fazer login</Link>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
};