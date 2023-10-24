import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { MenuLateral } from './shared/components';
import { Routes } from './routes/routes';
import { RoutesAuth } from './routes/routesAuth';

export const App = () => {
  const auth = true;

  if (auth) return (
    <AppThemeProvider>
      <BrowserRouter>
        <RoutesAuth />
      </BrowserRouter>
    </AppThemeProvider>
  );

  return (
    <AppThemeProvider>

      <DrawerProvider>
        <BrowserRouter>

          <MenuLateral>
            <Routes />
          </MenuLateral>

        </BrowserRouter>
      </DrawerProvider>

    </AppThemeProvider>
  );
};
