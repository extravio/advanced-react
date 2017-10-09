import express from 'express';
import config from './config.js';
import serverRender from 'renderers/server';
import { data } from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  const initialContent = serverRender();
  const initialData = {};
  res.render('index', { initialContent, initialData });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, function() {
  console.info('Running on ' + config.port + '...');
});
