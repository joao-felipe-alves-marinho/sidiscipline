import { Box, Container, Link, Paper, Typography } from '@mui/material';

export const Error404 = () => {

    return (
        <Container>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                p={5}
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    width='100%'
                    p={2}
                    gap={1}
                    component={Paper}
                >
                    <Typography variant='h1' fontWeight='bold' >Error 404</Typography>
                    <Typography variant='h2'>Página não encontrada</Typography>
                    <Link variant='h3' color='inherit' href='/' >Voltar</Link>
                </Box>
            </Box>
        </Container>
    );
};