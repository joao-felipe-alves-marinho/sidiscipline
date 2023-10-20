import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/routes';
import { MenuLateral } from './shared/components';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';

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
