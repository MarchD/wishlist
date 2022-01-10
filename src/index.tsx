import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { setupStore } from './store/store';
import App from './App';
import { themeMaterial } from './styles/themeMaterial';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={themeMaterial}>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
