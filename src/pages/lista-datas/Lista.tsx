import { Card, CardContent, Container, Grid } from '@mui/material';

import { LayoutBase } from '../../shared/layouts';
import { DateCalendar } from '@mui/x-date-pickers';
export const Lista = () => {

    return (
        <LayoutBase>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <DateCalendar sx={{
                            bgcolor: 'white',
                            '& .MuiDayCalendar-weekDayLabel': {
                                color: '#000000a7'
                            }
                        }} />
                    </Grid>
                    <Grid item xs={7}>
                        <Card><CardContent></CardContent></Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card><CardContent></CardContent></Card>
                    </Grid>
                </Grid>
            </Container>
        </LayoutBase>
    );
};