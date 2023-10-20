import { Button } from '@mui/material';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';


export const Routes = () => {
    const { toggleDrawer } = useDrawerContext();
    return (
        <Switch>
            <Route path='/home' element={<Button onClick={toggleDrawer} variant='contained'>Menu</Button>} />
            <Route path='*' element={<Navigate to='home' />} />
        </Switch>
    );
};