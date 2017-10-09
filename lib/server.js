import express from 'express';
import config from './config.js';
import serverRender from 'renderers/server';
import { data } from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async function(req, res) {
  const initialContent = await serverRender();
  const initialData = {};
  res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, function() {
  console.info('Running on ' + config.port + '...');
});
