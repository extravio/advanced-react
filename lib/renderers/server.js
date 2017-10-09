import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from 'components/App'; // because NODE_PATH=./lib is defined in package.json
import config from '../config';
import StateApi from 'state-api';
import axios from 'axios';

const serverRender = async () => {
  const resp = await axios.get('http://' + config.host + ':' + config.port + '/data');
  const store = new StateApi(resp.data);

  return {
    initialMarkup: ReactDomServer.renderToString(<App store = { store } />),
    initialData: resp.data
  };
};

export default serverRender;
