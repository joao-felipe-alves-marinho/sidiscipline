import { Navigate, Route, Routes as Switch } from 'react-router-dom';

import { Cadastro, Error404, Login, RecuperarSenha } from '../pages';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/recuperar-senha' element={<RecuperarSenha />} />

            <Route path='/not_found' element={<Error404 />} />
            <Route path='*' element={<Navigate to='/not_found' />} />
            <Route path='/' element={<Navigate to='/cadastro' />} />
        </Switch>
    );
};
