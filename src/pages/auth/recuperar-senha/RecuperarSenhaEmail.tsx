import { useEffect, useState } from 'react';
import { Card, CardContent, Box, Typography, TextField, CardActions, Button, Link, useTheme, useMediaQuery } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { AuthService } from '../../../shared/services/api/auth/AuthService';

export const RecuperarSenhaEmail = (props: {
    confirmEmail: React.Dispatch<React.SetStateAction<string>>
}) => {
    const theme = useTheme();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const [emails, setEmails] = useState<string[]>([]);

    useEffect(() => {
        AuthService.getEmails().then(result => {
            if (result instanceof Error) {
                console.log(result);
            } else {
                setEmails(result.emails);
            }
        });
    }, []);

    const EmailSchema = yup.object({
        email: yup.string().lowercase().required('Esse campo é obrigatorio.').email('E-mail invalido.')
            .oneOf(emails, 'E-mail não registrado.'),
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        defaultValues: {
            email: '',
        },
        resolver: yupResolver(EmailSchema),
        mode: 'onChange'
    });

    const onSubmit = (dados: { email: string }) => {
        props.confirmEmail(dados.email);
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
                >

                    <Typography
                        variant={xsDown ? 'h5' : 'h3'}
                        fontWeight='Bold'
                        color='primary'
                        mt={1}
                        mb={4}
                    >Recuperar a Senha</Typography>

                    <Typography mb={1} variant='subtitle1'>Digite seu E-mail cadastrado</Typography>
                    <TextField
                        fullWidth
                        label='E-mail'
                        placeholder='gustavo.morais@gmail.com'
                        type='email'
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
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
                        <Link href='/login' >Fazer login </Link>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
};