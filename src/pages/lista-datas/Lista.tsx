import { useEffect, useState } from 'react';
import { Card, Container, Grid } from '@mui/material';
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
            latidude: number;
            longidude: number;
        },
        horario_saida: string;
        location_saida: {
            latidude: number;
            longidude: number;
        }
    }[],
    faltas: {
        data: string;
        situacao: string;
        justificado: string;
    }[];
}

export const Lista = () => {
    const [pontosData, setPontosData] = useState<IPontoData>();

    useEffect(() => {
        PontoService.getAllPontos(JSON.parse(localStorage.getItem('user')!).id).then(result => {
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
                <Grid container spacing={2} justifyContent={'space-between'}>
                    <Grid item>
                        <Card>
                            <DateCalendar />
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
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