import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './app';
import { GlobalStyles } from './globalStyles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.querySelector('#root')
);