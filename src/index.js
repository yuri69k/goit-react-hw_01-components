import { default as React } from 'react';
import { default as ReactDOM } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';
import { App } from './components/App/App';
import { theme } from './constants';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
