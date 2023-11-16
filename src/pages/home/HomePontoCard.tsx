import { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Icon, IconButton, TextField, Typography, useTheme } from '@mui/material';

interface IHomePontoCardProps {
    variant?: boolean;
    time: string;
    entradaBatido?: boolean;
    setEntradaBatido?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ILocation {
    latitude: number;
    longitude: number
}

export const HomePontoCard = (props: IHomePontoCardProps) => {
    const theme = useTheme();
    const [check, setChecked] = useState(false);
    const [location, setLocation] = useState<ILocation>();
    const [storeTime, setStoreTime] = useState('');

    const getLocalization = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                'latitude': position.coords.latitude,
                'longitude': position.coords.longitude
            });
        });
        console.log(location);
    };

    return (
        <Card sx={{
            height: theme.spacing(67),
            borderRadius: theme.spacing(4),
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

                <TextField
                    fullWidth
                    label='Localização'
                    value={location ? [location.latitude, location.longitude].join(', ') : ''}
                    disabled={check}
                    InputProps={{
                        readOnly: true,
                        endAdornment: (
                            <IconButton
                                aria-label='butão localização'
                                color='inherit'
                                size='large'
                                onClick={getLocalization}
                                sx={{ visibility: check ? 'Hidden' : '' }}
                            >
                                <Icon>my_location</Icon>
                            </IconButton>
                        ),
                    }}
                />

                <Typography
                    variant='h4'
                    fontSize={theme.spacing(10)}
                    textAlign='center'
                    py={6}
                >
                    {props.entradaBatido ? '--:--' :
                        check ? storeTime : props.time}
                </Typography>
            </CardContent>
            <CardActions>
                <Box
                    width='100%'
                    height='100%'
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
                        disabled={!!check || !!props.entradaBatido || !location}
                        onClick={() => {
                            setStoreTime(props.time);
                            setChecked(true);
                            props.setEntradaBatido != undefined ? props.setEntradaBatido(false) : undefined;
                        }}
                    >
                        {!check ? 'BATER PONTO' : 'BATIDO'}
                    </Button>
                    {!check ? undefined :
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
                    }
                </Box>
            </CardActions>
        </Card >
    );
};