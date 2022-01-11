import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { setupStore } from './store/store';
import App from './App';
import { GlobalStyle } from './themes/globalStyles';
import './i18n';
import { fontsMaterial } from './themes/fontsMaterial';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router>
        <GlobalStyle />
        <CssBaseline />
        <ThemeProvider theme={fontsMaterial}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </Router>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
