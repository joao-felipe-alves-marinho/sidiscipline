import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { MenuLateral } from './shared/components';
import { Routes } from './routes/routes';

function App() {
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
}

export default App;
