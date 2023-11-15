import { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';

import { LayoutBase } from '../../shared/layouts';
import { HomePontoCard } from './HomePontoCard';

export const Home = () => {
    const [entradaBatido, setEntradaBatido] = useState(true);
    const [date, setDate] = useState(new Date());

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
                        <Typography variant='h2' fontWeight='600' textTransform='capitalize'>
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
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </LayoutBase>
    );
};