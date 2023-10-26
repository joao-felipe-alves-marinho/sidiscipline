import { BrowserRouter } from 'react-router-dom';

import {
    AppThemeProvider,
    AuthProvider,
    DrawerProvider,
    useAuthContext
} from './shared/contexts';
import { MenuLateral } from './shared/components';
import {
    Routes,
    RoutesAuth
} from './routes';

export const App = () => {
    const { isAuthenticated } = useAuthContext();

    return (
        <AppThemeProvider>
            <AuthProvider>

                <BrowserRouter>

                    {isAuthenticated ?
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
