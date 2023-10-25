import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider, AuthProvider, DrawerProvider, useAuthContext } from './shared/contexts';
import { MenuLateral } from './shared/components';
import { Routes } from './routes/routes';
import { RoutesAuth } from './routes/routesAuth';

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
