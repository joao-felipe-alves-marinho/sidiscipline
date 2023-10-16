
import { Button } from '@mui/material';
import { Route, BrowserRouter, Routes as Switch } from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path={'*'} element={<Button variant='contained'>Menu</Button>} />
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;
