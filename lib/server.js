import express from 'express';
import config from './config.js';
import serverRender from './serverRender';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  const initialContent = serverRender();
  const initialData = {};
  res.render('index', { initialContent, initialData });
});

app.listen(config.port, function() {
  console.info('Running on ' + config.port + '...');
});
