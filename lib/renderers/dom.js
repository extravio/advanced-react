import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/App'; // because NODE_PATH=./lib is defined in package.json
import StateApi from 'state-api';

const store = new StateApi(window.initialData);

ReactDom.render (
  <App store = { store } />,
  document.getElementById('root')
);
