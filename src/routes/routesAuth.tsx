import {
    Navigate,
    Route,
    Routes as Switch
} from 'react-router-dom';

import {
    Cadastro,
    Login,
    RecuperarSenha
} from '../pages';


export const RoutesAuth = () => {
    return (
        <Switch>
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/recuperar-senha' element={<RecuperarSenha />} />

            <Route path='*' element={<Navigate to='/cadastro' />} />
        </Switch>
    );
};