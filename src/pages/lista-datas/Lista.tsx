import { Card, Container, Grid } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';

import { ListaTablePedencias } from './ListaTablePendencias';
import { LayoutBase } from '../../shared/layouts';
import { ListaTableFaltas } from './ListaTableFaltas';

export const Lista = () => {

    return (
        <LayoutBase>
            <Container>
                <Grid container spacing={2} justifyContent={'space-between'}>
                    <Grid item>
                        <Card>
                            <DateCalendar />
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <ListaTablePedencias />
                    </Grid>
                    <Grid item xs={12}>
                        <ListaTableFaltas />
                    </Grid>
                </Grid>
            </Container>
        </LayoutBase>
    );
};