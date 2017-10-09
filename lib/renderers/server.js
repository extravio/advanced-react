import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from 'components/App'; // because NODE_PATH=./lib is defined in package.json
import config from '../config';
import DataApi from 'state-api';
import axios from 'axios';

const serverRender = async () => {
  const resp = await axios.get('http://' + config.host + ':' + config.port + '/data');
  const api = new DataApi(resp.data);
  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  return {
    initialMarkup: ReactDomServer.renderToString(<App initialData = { initialData } />),
    initialData
  };
};

export default serverRender;
