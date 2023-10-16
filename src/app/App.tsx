import Routes from './routes/routes';
import { MenuLateral } from './shared/components';
import { AppThemeProvider } from './shared/contexts';
function App() {
  return (
    <AppThemeProvider>
      <MenuLateral>
        <Routes />
      </MenuLateral>
    </AppThemeProvider>
  );
}

export default App;
