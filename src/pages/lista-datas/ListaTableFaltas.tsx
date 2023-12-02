import { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from '@mui/material';

import { ListaTableFaltasDialog } from './ListaTableFaltasDialog';

export const ListaTableFaltas = (props: {
    faltas: {
        data: string;
        situacao: string;
        anexo: string[];
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
            <Typography variant='h6' mt={1} ml={2} fontWeight='600'>Faltas</Typography>
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
                            <TableCell align='center'>
                                {row.anexo.length > 0 ? <Button disabled size='small' color='secondary'>Justificado</Button>
                                    : <ListaTableFaltasDialog date={row.data}/>}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[]}
                            count={faltas ? faltas.length : -1}
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