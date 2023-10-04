import { ThemeProvider } from "@emotion/react";
import Routes from "./routes/routes";
import { LightTheme } from "./shared/themes";

function App() {
  return (
    <ThemeProvider theme={ LightTheme }>
      <Routes />
    </ThemeProvider>
  )
}

export default App;
