import React from 'react';
import addReactNDevTools from 'reactn-devtools';
import ReactDOM from 'react-dom';
import App from './App';
import { mockApiClient } from './dataProvider';
import { settings, Provider } from 'reactn-crud';
import './index.css';

// init
const dataProvider = mockApiClient(
  'https://5d543b8b36ad770014ccd65a.mockapi.io/api'
);
// set data provider
settings.set('dataProvider', dataProvider);
// redux dev tools
addReactNDevTools();
addReactNDevTools(Provider);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
