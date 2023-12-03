import { useState } from 'react';
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Icon, IconButton, Paper, TextField, useTheme } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { MuiFileInput } from 'mui-file-input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { LayoutBase } from '../../shared/layouts';
import { PontoService } from '../../shared/services/api/ponto/PontoService';

interface IUpdateUserForm {
    username: string;
    email: string;
    password: string;
}

const updateUserSchema = yup.object({
    username: yup.string().required('Esse campo é obrigatorio.'),
    email: yup.string().lowercase().required('Esse campo é obrigatorio.').email('E-mail invalido.'),
    password: yup.string().required('Esse campo é obrigatorio.').min(5, 'A senha deve ter pelo menos 5 caracteres.')
});

export const Configuracoes = () => {
    const theme = useTheme();
    const textContrastColor = theme.palette.getContrastText(theme.palette.background.paper);

    const user = JSON.parse(localStorage.getItem('user')!);

    const [file, setFile] = useState<File | null>(null);

    const handleChange = (newFile: File | null) => {
        setFile(newFile);
    };

    const handleOnClick = () => {
        if (!file) return;
        const fileForm = new FormData();
        fileForm.append('file', file);

        PontoService.postUploadAvatar(user.id, fileForm).then(result => {
            if (result instanceof Error) {
                console.log(result);
            } else {
                user.avatar = result.avatar;
                localStorage.setItem('user', JSON.stringify(user));
                window.location.reload();
            }
        });
    };

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((show) => !show);

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(oldOpen => !oldOpen);
    };

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<IUpdateUserForm>({
        defaultValues: {
            username: user.name,
            email: user.email,
            password: user.password,
        },
        resolver: yupResolver(updateUserSchema),
        mode: 'onChange'
    });

    const onSubmit = (data: {
        username: string,
        email: string,
        password: string
    }) => {
        PontoService.putUpdateUser(user.id, data.username, data.email, data.password).then((result) => {
            if (result instanceof Error) {
                console.log(result);
            } else {
                localStorage.setItem('user', JSON.stringify(result.user));
                window.location.reload();
            }
        });
    };

    return (
        <LayoutBase>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    component={Paper}
                    m={2}
                    px={10}
                    py={6}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    gap={3}
                >
                    <Box
                        display='flex'
                        justifyContent='flex-end'
                        alignItems='flex-end'
                        sx={{ position: 'static' }}
                    >
                        <Fab
                            aria-label='Mudar Avatar'
                            color='primary'
                            sx={{ position: 'absolute' }}
                            onClick={toggleOpen}
                        >
                            <Icon>edit_icon</Icon>
                        </Fab>
                        <Avatar
                            alt={user.name}
                            src={`http://127.0.0.1:5000/sidi_ponto/v1/pontos/1/avatars/${user.avatar}`}
                            sx={{
                                width: theme.spacing(20),
                                height: theme.spacing(20),
                                bgcolor: 'secondary.main',
                                color: 'black'
                            }}>
                            {user.name.charAt(0)}
                        </Avatar>
                    </Box>

                    <TextField
                        {...register('username')}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                        label='Nome'
                        fullWidth
                    />

                    <TextField
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        label='E-mail'
                        type='email'
                        fullWidth
                    />

                    <TextField
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        label='Senha'
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
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

                    <Button
                        fullWidth
                        color='secondary'
                        type='submit'
                        disabled={!isDirty || !isValid}
                    >
                        Salvar Mudanças
                    </Button>
                </Box>
            </form>
            <Dialog
                open={open}
                onClose={toggleOpen}
                fullWidth
            >
                <DialogTitle variant='h5' fontWeight='500' align='center'>
                    Novo Avatar
                </DialogTitle>
                <DialogContent>
                    <MuiFileInput
                        value={file}
                        onChange={handleChange}
                        fullWidth
                        placeholder='Nova imagem'
                        inputProps={{
                            accept: 'image/*',
                        }}
                        clearIconButtonProps={{
                            children: <Icon>clear_icon</Icon>
                        }}
                        sx={{
                            '& .MuiFileInput-placeholder': {
                                color: `${textContrastColor} !important`
                            }
                        }}
                    />
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'space-between' }} >
                    <Button
                        color='error'
                        onClick={() => {
                            toggleOpen();
                            setFile(null);
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        color='secondary'
                        onClick={handleOnClick}
                        disabled={!file}
                    >
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        </LayoutBase >
    );
};