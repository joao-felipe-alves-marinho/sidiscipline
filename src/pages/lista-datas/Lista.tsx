import { useEffect, useState } from 'react';
import { Card, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';

import { PontoService } from '../../shared/services/api/ponto/PontoService';
import { ListaTablePontos } from './ListaTablePontos';
import { ListaTableFaltas } from './ListaTableFaltas';
import { LayoutBase } from '../../shared/layouts';


interface IPontoData {
    pontos:
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
    }[];
    faltas: {
        data: string;
        situacao: string;
        anexo: string[];
    }[];
}

export const Lista = () => {
    const theme = useTheme();
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

    const [pontosData, setPontosData] = useState<IPontoData>();

    useEffect(() => {
        const user_id = JSON.parse(localStorage.getItem('user')!).id;
        PontoService.getAllPontos(user_id).then(result => {
            if (result instanceof Error) {
                console.log(result);
            } else {
                const pontos = { 'pontos': result.pontos, 'faltas': result.faltas };
                setPontosData(pontos);
            }
        });
    }, []);


    return (
        <LayoutBase>
            <Container>
                <Grid container spacing={2} justifyContent={lgDown ? 'center' : 'space-between'} >
                    <Grid item>
                        <Card>
                            <DateCalendar sx={{ maxHeight: 351.23, height: 351.23 }} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={8.3}>
                        <ListaTableFaltas faltas={pontosData?.faltas} />
                    </Grid>
                    <Grid item xs={12}>
                        <ListaTablePontos pontos={pontosData?.pontos} />
                    </Grid>
                </Grid>
            </Container>
        </LayoutBase>
    );
};