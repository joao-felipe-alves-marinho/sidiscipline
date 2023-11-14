import { BrowserRouter } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import ptBR from 'date-fns/locale/pt-BR';

import { AppThemeProvider, AuthProvider, DrawerProvider, } from './shared/contexts';
import { MenuLateral } from './shared/components';
import { Routes, RoutesAuth } from './routes';

export const App = () => {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <AppThemeProvider>
                <AuthProvider>


                    <BrowserRouter>

                        {localStorage.getItem('isAuth') == 'true' ?
                            <DrawerProvider>
                                <MenuLateral>
                                    <Routes />
                                </MenuLateral>
                            </DrawerProvider>
                            :
                            <RoutesAuth />
                        }

                    </BrowserRouter>
                </AuthProvider>
            </AppThemeProvider >
        </LocalizationProvider>
    );
};
