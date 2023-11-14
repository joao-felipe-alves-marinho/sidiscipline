import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider, AuthProvider, DrawerProvider, } from './shared/contexts';
import { MenuLateral } from './shared/components';
import { Routes, RoutesAuth } from './routes';

export const App = () => {

    return (
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
    );
};
