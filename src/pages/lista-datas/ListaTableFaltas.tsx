import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export const ListaTableFaltas = (props: {
    faltas: {
        data: string;
        situacao: string;
        justificado: string;
    }[] | undefined;
}) => {
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
                    {faltas?.map((row) => (
                        <TableRow key={row.data}>
                            <TableCell>{row.data}</TableCell>
                            <TableCell>{row.situacao}</TableCell>
                            <TableCell><Button size='small' color='secondary'>Justificar</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};