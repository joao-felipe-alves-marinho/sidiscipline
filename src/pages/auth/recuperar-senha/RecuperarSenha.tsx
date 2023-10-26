import {
    Box,
    Typography,
} from '@mui/material';
import { RecuperarSenhaEmail } from './RecuperarSenhaEmail';
import { useState } from 'react';
import { RecuperarSenhaMudar } from './RecuperarSenhaMudar';


export const RecuperarSenha = () => {
    const [validateEmail, setValidateEmail] = useState(false);

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
                {validateEmail ? <RecuperarSenhaMudar /> : <RecuperarSenhaEmail confirmEmail={setValidateEmail} />}
            </Box>
        </Box >
    );
};