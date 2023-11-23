import { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';

export const ListaTableFaltas = (props: {
    faltas: {
        data: string;
        situacao: string;
        justificado: string;
    }[] | undefined;
}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(3);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const faltas = props.faltas;
    return (
        <TableContainer component={Paper}>
            <Typography variant='h5' mt={1} ml={2} fontWeight='600'>Faltas</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>Situação</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {faltas?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.data}>
                            <TableCell>{row.data}</TableCell>
                            <TableCell>{row.situacao}</TableCell>
                            <TableCell><Button size='small' color='secondary'>Justificar</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[]}
                count={faltas ? faltas.length : -1}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
            />
        </TableContainer>
    );
};