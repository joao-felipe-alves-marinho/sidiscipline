import { Navigate, Route, Routes as Switch } from 'react-router-dom';

import { Configuracoes, Error404, Home, Lista } from '../pages';


export const RoutesProtected = () => {
    return (
        <Switch>
            <Route path='/home' element={<Home />} />
            <Route path='/lista-datas' element={<Lista />} />
            <Route path='/configuracoes' element={<Configuracoes />} />
            
            <Route path='/not_found' element={<Error404 />} />
            <Route path='*' element={<Navigate to='/not_found' />} />
            <Route path='/' element={<Navigate to='/home' />} />
        </Switch>
    );
};
