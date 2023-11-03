import React, { useState } from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LayoutBase } from '../../shared/layouts';

export const Configuracoes = () => {
    const [name, setName] = useState('Williams Silva');
    const [email, setEmail] = useState('Limmwillams@sidi.com');
    const [telefone, setTelefone] = useState('(81) 9 4002-8922');
    const [senha, setSenha] = useState('********');
    const [mensagem, setMensagem] = useState('');
    const [mensagemVisible, setMensagemVisible] = useState(false);

    const handleNameChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSenha(event.target.value);
    };

    const handleTelefoneChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setTelefone(event.target.value);
    };

    const handleSaveChanges = () => {
        setMensagem('Alterações salvas com sucesso!');
        setMensagemVisible(true);
    };

    return (
        <LayoutBase>
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
                <TextField
                    id='name'
                    label='Nome'
                    variant='outlined'
                    fullWidth
                    value={name}
                    onChange={handleNameChange}
                    margin='normal'
                />

                <TextField
                    id='email'
                    label='Email'
                    type='email'
                    variant='outlined'
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                    margin='normal'
                />

                <TextField
                    id='senha'
                    label='Senha'
                    type='password'
                    variant='outlined'
                    fullWidth
                    value={senha}
                    onChange={handleSenhaChange}
                    margin='normal'
                />

                <TextField
                    id='telefone'
                    label='Telefone'
                    type='tel'
                    variant='outlined'
                    fullWidth
                    value={telefone}
                    onChange={handleTelefoneChange}
                    margin='normal'
                />

                <Button
                    fullWidth
                    variant='contained'
                    color='secondary'
                    onClick={handleSaveChanges}
                >
                    Salvar Mudanças
                </Button>

                {mensagemVisible && (
                    <Typography variant='body1' color='success'>
                        {mensagem}
                    </Typography>
                )}
            </Box>
        </LayoutBase>
    );
};