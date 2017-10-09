import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from 'components/App'; // because NODE_PATH=./lib is defined in package.json

const serverRender = () => {
  return ReactDomServer.renderToString(
    <App />
  );
};

export default serverRender;
