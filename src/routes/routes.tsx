import { Route, Routes as Switch } from 'react-router-dom';

import { Home } from '../pages';


export const Routes = () => {
    return (
        <Switch>
            <Route path='/home' element={<Home />} />
        </Switch>
    );
};