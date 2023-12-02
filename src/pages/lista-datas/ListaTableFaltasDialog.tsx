import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Icon, useTheme } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { MuiFileInput } from 'mui-file-input';
import { PontoService } from '../../shared/services/api/ponto/PontoService';

export const ListaTableFaltasDialog = (props: { date: string }) => {
    const theme = useTheme();
    const textContrastColor = theme.palette.getContrastText(theme.palette.background.paper);

    const userId = JSON.parse(localStorage.getItem('user')!).id;

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(oldOpen => !oldOpen);
    };

    const { control, handleSubmit, formState: { isDirty, isValid } } = useForm({
        defaultValues: {
            file: null
        },
        mode: 'onChange'
    });

    const onSubmit = (data: { file: File | null }) => {
        if (data.file == null) return;
        const fileForm = new FormData();
        fileForm.append('file', data.file);
        PontoService.uploadAnexoFalta(userId, props.date, fileForm).then(result => {
            if (result instanceof Error) {
                console.log(result);
            }
        });
        window.location.reload();
    };

    return (
        <>
            <Button size='small' color='secondary' onClick={toggleOpen}>Justificar</Button>
            <Dialog
                open={open}
                onClose={toggleOpen}
                component='form'
                fullWidth
                onSubmit={handleSubmit(onSubmit)}
            >
                <DialogTitle variant='h5' fontWeight='500' align='center'>
                    Adicionar Justificativa
                </DialogTitle>
                <DialogContent>
                    <Controller
                        name="file"
                        control={control}
                        render={({ field }) => (
                            <MuiFileInput
                                {...field}
                                fullWidth
                                placeholder='Adicione o anexo de justificativa'
                                inputProps={{
                                    accept: 'image/*, .pdf,',
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
                        )}
                    />
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'space-between' }} >
                    <Button color='error' onClick={toggleOpen}>Cancelar</Button>
                    <Button
                        color='secondary'
                        type='submit'
                        disabled={!isDirty || !isValid}
                    >
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};