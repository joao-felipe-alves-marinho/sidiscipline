import { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';

import { PontoService } from '../../shared/services/api/ponto/PontoService';
import { LayoutBase } from '../../shared/layouts';
import { HomePontoCard } from './HomePontoCard';

interface IPontoData {
    ponto:
    {
        data: string;
        horario_entrada: string;
        location_entrada: {
            latitude: number;
            longitude: number;
        },
        horario_saida: string;
        location_saida: {
            latitude: number;
            longitude: number;
        }
    };
}
export const Home = () => {
    const [entradaBatido, setEntradaBatido] = useState(true);
    const [date, setDate] = useState(new Date());
    const [pontosData, setPontosData] = useState<IPontoData>();

    useEffect(() => {
        const data = date.toLocaleDateString(undefined, {
            dateStyle: 'short'
        });
        const user_id = JSON.parse(localStorage.getItem('user')!).id;
        PontoService.getPontoData(user_id, data).then(result => {
            if (result instanceof Error) {
                console.log(result);
            } else {
                const ponto = { 'ponto': result.ponto };
                setPontosData(ponto);
                if (ponto.ponto.horario_entrada && ponto.ponto.location_entrada) {
                    setEntradaBatido(false);
                }
            }
        });
    }, [date]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <LayoutBase>
            <Container>
                <Grid container>
                    <Grid item mx='auto' mb={1}>
                        <Typography variant='h3' fontWeight='600' textTransform='capitalize'>
                            {date.toLocaleDateString(undefined, {
                                weekday: 'long',
                                day: 'numeric',
                                month: 'long'
                            })}
                        </Typography>
                    </Grid>
                    <Grid item container spacing={12} justifyContent='center'>
                        <Grid item>
                            <HomePontoCard
                                setEntradaBatido={setEntradaBatido}
                                time={date.toLocaleTimeString(undefined, {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                                pontoData={{
                                    'horario': pontosData?.ponto.horario_entrada,
                                    'location': {
                                        'latitude': pontosData?.ponto.location_entrada.latitude,
                                        'longitude': pontosData?.ponto.location_entrada.longitude
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <HomePontoCard
                                variant
                                entradaBatido={entradaBatido}
                                time={date.toLocaleTimeString(undefined, {
                                    hour: 'numeric',
                                    minute: 'numeric'
                                })}
                                pontoData={{
                                    'horario': pontosData?.ponto.horario_saida,
                                    'location': {
                                        'latitude': pontosData?.ponto.location_saida.latitude,
                                        'longitude': pontosData?.ponto.location_saida.longitude
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </LayoutBase>
    );
};