import { useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Icon, IconButton, Link, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { AuthService } from '../../shared/services/api/auth/AuthService';
import { useAuthContext } from '../../shared/contexts';

interface ICadastroDadosForm {
    username: string;
    email: string;
    password: string;
}

export const Cadastro = () => {
    const theme = useTheme();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((show) => !show);

    const navigate = useNavigate();

    const { signup } = useAuthContext();

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

    const CadastroSchema = yup.object({
        username: yup.string().required('Esse campo é obrigatorio.'),
        email: yup.string().lowercase().required('Esse campo é obrigatorio.').email('E-mail invalido.')
            .notOneOf(emails, 'E-mail já registrado.'),
        password: yup.string().required('Esse campo é obrigatorio.').min(5, 'A senha deve ter pelo menos 5 caracteres.'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'As senhas não coincidem.'),
        termsAndServices: yup.bool().isTrue('Esse campo é obrigatorio.'),
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            termsAndServices: undefined,
        },
        resolver: yupResolver(CadastroSchema),
        mode: 'onChange',
    });

    const onSubmit = (dados: ICadastroDadosForm) => {
        signup(dados.username, dados.email, dados.password);
        navigate('/login');
    };

    return (
        <Box height='100%' width='100%' display='flex'>
            {smDown ?
                undefined :
                <Box
                    height='100%'
                    width={theme.spacing(50)}
                    bgcolor='primary.main'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    color='primary.contrastText'
                >
                    <Typography variant='h2' color='inherit'><b>SIDI</b>SCIPLINE</Typography>
                    <Typography mx={6} mt={10} align='center' fontSize={theme.spacing(3)}>Seja bem-vindo e controle seu tempo!</Typography>
                    <Typography mt={10} mb={2}>Faça seu login para continuar.</Typography>
                    <Button href='/login' sx={{ width: theme.spacing(35), height: theme.spacing(6), fontSize: theme.spacing(2.5) }} color='secondary'>Entrar</Button>
                    <Link mt={2} color='inherit' underline='always' href='/recuperar-senha'>Esqueci minha senha</Link>

                </Box>
            }
            <Box flex={1} display='flex' justifyContent='center' alignItems='center' m={smDown ? 0 : 2}>
                <Stack spacing={2} component='form' onSubmit={handleSubmit(onSubmit)}>

                    {smDown ?
                        <Typography
                            color='primary'
                            variant={xsDown ? 'h4' : 'h2'}
                            align='center'
                            fontWeight='bold'
                        >
                            SIDISCIPLINE
                        </Typography>
                        : undefined
                    }

                    <Typography
                        color='primary'
                        variant={xsDown ? 'h5' : 'h3'}
                        fontWeight='600'
                        align={smDown ? 'center' : undefined}
                    >
                        CRIE SUA CONTA
                    </Typography>
                    <Typography
                        mt={1}
                        mb={4}
                        align={smDown ? 'center' : undefined}
                    >
                        Registre-se para não perder um minuto.
                    </Typography>

                    <TextField
                        label='Nome'
                        type='text'
                        placeholder='Gustavo Morais'
                        {...register('username')}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                    <TextField
                        label='E-mail'
                        type='email'
                        placeholder='gustavo.morais@gmail.com'
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        label='Senha'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='********'
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        InputProps={{
                            endAdornment: (
                                <IconButton
                                    aria-label='botão mostra senha'
                                    size='large'
                                    onClick={toggleShowPassword}
                                >
                                    <Icon>{showPassword ? 'visibility_off' : 'visibility'}</Icon>
                                </IconButton>
                            ),
                        }}
                    />
                    <TextField
                        label='Confirmar Senha'
                        type='password'
                        placeholder='********'
                        {...register('passwordConfirmation')}
                        error={!!errors.passwordConfirmation}
                        helperText={errors.passwordConfirmation?.message}
                    />
                    <FormControl error={!!errors.termsAndServices}>

                        <FormControlLabel
                            control={<Checkbox color='secondary' />}
                            label={<Typography>
                                Li e estou de acordo com os <Link color='primary.dark'>Termos de uso e politica de privacidade</Link>.
                            </Typography>}
                            {...register('termsAndServices')}
                        />
                        <FormHelperText>{errors.termsAndServices?.message}</FormHelperText>
                    </FormControl>
                    <Button type='submit' color='secondary' disabled={!isDirty || !isValid} >Cadastrar</Button>
                    {smDown ?
                        <Box display='flex' justifyContent='space-between'>

                            <Link
                                mt={2}
                                color='primary.dark'
                                underline='always'
                                href='/login'
                                variant='h6'
                            >
                                Entrar
                            </Link>
                            <Link
                                mt={2}
                                color='primary.dark'
                                underline='always'
                                href='/recuperar-senha'
                                variant='h6'
                            >
                                Esqueci minha senha
                            </Link>
                        </Box>
                        : undefined
                    }
                </Stack>
            </Box>
        </Box >
    );
};