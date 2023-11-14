import {
    Grid,
    Typography
} from '@mui/material';

import { LayoutBase } from '../../shared/layouts';

export const Home = () => {

    return (
        <LayoutBase>
            <Grid>
                <Grid display='flex' justifyContent='center'>
                    <Typography fontWeight='bold' variant='h1'>WIP</Typography>
                </Grid>
            </Grid>
        </LayoutBase>
    );
};