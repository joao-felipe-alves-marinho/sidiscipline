import { Box, Button, Card, CardActions, CardContent, TextField, Typography, useTheme } from '@mui/material';

interface IHomePontoCardProps {
    variant?: boolean;
    time?: string
}

export const HomePontoCard = (props: IHomePontoCardProps) => {
    const theme = useTheme();

    return (
        <Card sx={{
            borderRadius: theme.spacing(5),
            p: theme.spacing(2),
        }}>
            <CardContent component={Box}
                display='flex'
                flexDirection='column'
                width={theme.spacing(38)}
            >
                <Typography pb={3} variant='h3' fontWeight='600' textAlign='center'>
                    {props.variant ? 'Saida' : 'Entrada'}
                </Typography>
                <TextField fullWidth label='Localização' />
                <Typography
                    variant='h4'
                    fontSize={theme.spacing(10)}
                    textAlign='center'
                    py={6}
                >
                    {props.time}
                </Typography>
            </CardContent>
            <CardActions>
                <Box
                    width='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    gap={3}
                    pb={1}
                >
                    <Button
                        color='secondary'
                        size='large'
                        sx={{
                            width: theme.spacing(28),
                            height: theme.spacing(6),
                            fontSize: theme.spacing(2.4)
                        }}
                    >
                        BATER PONTO
                    </Button>
                    <Button
                        color='secondary'
                        size='large'
                        sx={{
                            width: theme.spacing(28),
                            height: theme.spacing(6),
                            fontSize: theme.spacing(2.4)
                        }}
                    >
                        Ajustrar Ponto
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};