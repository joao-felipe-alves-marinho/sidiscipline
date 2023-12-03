import { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from '@mui/material';

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

    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(3);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const pontosData = props.pontos;

    return (
        <TableContainer component={Paper}>
            <Typography variant='h4' mt={1} ml={2} fontWeight='600'>Pontos</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell align='center'>Horario Entrada</TableCell>
                        <TableCell align='center'>Horario Saida</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {pontosData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.data}>
                            <TableCell>{row.data}</TableCell>
                            <TableCell align='center'>{row.horario_entrada}</TableCell>
                            <TableCell align='center'>{row.horario_saida}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[]}
                            count={pontosData ? pontosData.length : -1}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};