import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { LayoutBase } from '../../shared/layouts';
import { HomePontoCard } from './HomePontoCard';

export const Home = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 10000);
        return () => clearInterval(interval);
    },[]);

    return (
        <LayoutBase>
            <Box width='100%' display='flex'>
                <Grid container mx={2} my={1}>
                    <Grid item mx='auto' mb={2}>
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
                            <HomePontoCard time={date.toLocaleTimeString(undefined, {
                                hour: '2-digit',
                                minute: '2-digit'
                            })} />
                        </Grid>
                        <Grid item>
                            <HomePontoCard variant time={date.toLocaleTimeString(undefined, {
                                hour: 'numeric',
                                minute: 'numeric'
                            })} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </LayoutBase>
    );
};