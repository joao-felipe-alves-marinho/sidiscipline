import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export const ListaTablePontos = (props: {
    pontos: {
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
    }[] | undefined;
}) => {
    const pontosData = props.pontos;

    return (
        <TableContainer component={Paper}>
            <Typography variant='h5' mt={1} ml={2} fontWeight='600'>Pontos</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>Horario Entrada</TableCell>
                        <TableCell>Horario Saida</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {pontosData?.map((row) => (
                        <TableRow key={row.data}>
                            <TableCell>{row.data}</TableCell>
                            <TableCell>{row.horario_entrada}</TableCell>
                            <TableCell>{row.horario_saida}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};