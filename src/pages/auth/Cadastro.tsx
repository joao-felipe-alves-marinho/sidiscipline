import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Link, Stack,
    TextField,
    Typography,
    useTheme
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAuthContext } from '../../shared/contexts';

interface ICadastroDadosForm {
    username: string;
    email: string;
    password: string;
}

const CadastroSchema = yup.object({
    username: yup.string().required('Esse campo é obrigatorio.'),
    email: yup.string().required('Esse campo é obrigatorio.').email('E-mail invalido.'),
    password: yup.string().required('Esse campo é obrigatorio.').min(5, 'A senha deve ter pelo menos 5 caracteres.'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'As senhas não coincidem.'),
    termsAndServices: yup.bool().isTrue('Esse campo é obrigatorio.'),
});

export const Cadastro = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const { signup } = useAuthContext();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            termsAndServices: undefined,
        },
        resolver: yupResolver(CadastroSchema)
    });

    const onSubmit = (dados: ICadastroDadosForm) => {
        signup(dados.username, dados.email, dados.password);
        navigate('/login');
    };

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
                <Typography mt={14} variant='h2' color='inherit'><b>SIDI</b>SCIPLINE</Typography>
                <Typography mx={6} mt={10} align='center' fontSize={theme.spacing(3)}>Seja bem-vindo e controle seu tempo!</Typography>
                <Typography mt={10} mb={2}>Faça seu login para continuar.</Typography>
                <Button href='/login' sx={{ width: theme.spacing(35), height: theme.spacing(6), fontSize: theme.spacing(2.5) }} color='secondary'>Entrar</Button>
                <Link mt={2} color='inherit' underline='always' href='/recuperar-senha'>Esqueci minha senha</Link>

            </Box>
            <Box flex={1} display='flex' justifyContent='center' alignItems='center' m={2}>
                <Stack spacing={2} component='form' onSubmit={handleSubmit(onSubmit)}>
                    <Typography color='primary' variant='h3'><b>CRIE SUA CONTA</b></Typography>
                    <Typography mt={1} mb={4}>Registre-se para não perder um minuto.</Typography>

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
                        type='password'
                        placeholder='********'
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
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
                    <Button type='submit' color='secondary'>Cadastrar</Button>
                </Stack>
            </Box>
        </Box >
    );
};