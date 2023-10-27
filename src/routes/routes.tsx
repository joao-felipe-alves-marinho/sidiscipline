import {
    Navigate,
    Route,
    Routes as Switch
} from 'react-router-dom';

import {
    Configuracoes,
    Home,
    Lista
} from '../pages';


export const Routes = () => {
    return (
        <Switch>
            <Route path='/home' element={<Home />} />
            <Route path='/lista-datas' element={<Lista />} />
            <Route path='/configuracoes' element={<Configuracoes />} />

            <Route path='*' element={<Navigate to='/home' />} />
        </Switch>
    );
};