import { Box, Typography, useMediaQuery, useTheme, } from '@mui/material';
import { RecuperarSenhaEmail } from './RecuperarSenhaEmail';
import { useState } from 'react';
import { RecuperarSenhaMudar } from './RecuperarSenhaMudar';


export const RecuperarSenha = () => {
    const theme = useTheme();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const [email, setEmail] = useState('');

    return (
        <Box
            width='100%'
            height='43%'
            bgcolor='primary.main'
            display='flex'
        >
            <Typography
                variant={smDown ?
                    xsDown ? 'h5' : 'h4'
                    : 'h3'}
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
                {email ? <RecuperarSenhaMudar email={email} /> : <RecuperarSenhaEmail confirmEmail={setEmail} />}
            </Box>
        </Box >
    );
};