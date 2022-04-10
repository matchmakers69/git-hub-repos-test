import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { theme } from 'theme';
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
  <StrictMode>
     <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    
  </StrictMode>
);
reportWebVitals();
